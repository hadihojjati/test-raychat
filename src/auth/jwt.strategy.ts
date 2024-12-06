import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { JwtPayload } from './jwt-payload.interface';
import { Request } from 'express';
import { RedisService } from '@liaoliaots/nestjs-redis';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  private redisClient;
  constructor(
    private readonly configService: ConfigService,
    private readonly authService: AuthService,
    private readonly redisService: RedisService, // Inject RedisService
    private readonly jwtService: JwtService // Inject JwtService
  ) 
  {
    super({
     // jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
		jwtFromRequest: ExtractJwt.fromExtractors([(request: Request) => {
        // Extract JWT from the Authentication cookie
        const token = request?.cookies?.Authentication;
        if (!token) {
          return null;
        }
        return token;
      }]),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET'),  // Ensure this is loaded properly
    });
       // Get Redis client from RedisService
       this.redisClient = this.redisService.getClient();
  }

  async validate(payload: any) {
    const { sub: userId , jti} = payload;
    const token = this.jwtService.decode(payload) as string;

    // Check if the token exists in Redis
   // const key = `auth:${userId}:${token}`;
    const tokenKey = `auth:${userId}:${jti}`;
    const storedToken = await this.redisClient.get(tokenKey);

    if (!storedToken) {
      throw new UnauthorizedException('Token is invalid or expired');
    }
  
    return { userId: payload.sub, username: payload.username };
  }
  
}
