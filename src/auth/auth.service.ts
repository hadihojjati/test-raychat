import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../users/users.service';
import { RedisService } from '../common/redis/redis.service'; 
import * as bcrypt from 'bcryptjs';
import * as crypto from 'crypto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
	private readonly redisService: RedisService,
  ) {}

  /**
   * Validate user credentials (username and password)
   */
  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findByUsername(username);

    if (user && bcrypt.compareSync(password, user.password)) {
	  const { password, ...result } = user;
      return result;
    }
    return null;
  }

  /**
   * Handle user login and store the token in Redis
   */
  async login(loginDto: LoginDto): Promise<string> {
    const { username, password } = loginDto;

  // Use validateUser to fetch the user and verify credentials
  const user = await this.validateUser(username, password);
  if (!user) {
    throw new UnauthorizedException('اطلاعات کاربری نادرست است!');
  }
  
  // Use the `_doc` property or convert the Mongoose object to a plain object
  const plainUser = user.toObject ? user.toObject() : user._doc;

  // Generate JWT token
  const jti = crypto.randomUUID(); // Generate a unique identifier for the token
  const payload = { username: plainUser.username, sub: plainUser._id ,jti: jti};
  const token = this.jwtService.sign(payload);

  // Store the token in Redis with a 1-hour expiration
  const redisKey = `auth:${plainUser._id}:${jti}`;
  await this.redisService.set(redisKey, token, 3600); // 3600 seconds = 1 hour
  return token; // Return token for setting in the cookie
	}
  /**
   * Validate JWT token using Redis
   */
  async validateToken(userId: string, token: string): Promise<boolean> {
   // const redisKey = `auth:${userId}`;
   const redisKeys = await this.redisService.get(`auth:${userId}:${token}`);
  //  const storedToken = await this.redisService.get(redisKey);

    // Compare the provided token with the stored token in Redis
    return redisKeys === token;
  }

  /**
   * Handle user logout and remove token from Redis
   */
  async logout(token: string): Promise<void> {
    try {
      // Decode the token to get the userId
      const decodedToken = this.jwtService.decode(token) as { sub: string; jti: string };
  
      if (!decodedToken || !decodedToken.sub || !decodedToken.jti) {
        throw new Error('Invalid token');
      }
  
      const userId = decodedToken.sub;
      const jti = decodedToken.jti;
      // Remove the specific token
      //const key = `auth:${userId}:${token}`;
      const key = `auth:${userId}:${jti}`;
      await this.redisService.del(key);
  
      console.log(`Token removed from Redis for session: ${key}`);
    } catch (error) {
      console.error('Failed to remove token from Redis:', error.message);
      throw new UnauthorizedException('Invalid token');
    }
  }
}