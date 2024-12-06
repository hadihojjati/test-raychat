import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { RedisService } from '../redis/redis.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly redisService: RedisService,
    private readonly jwtService: JwtService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('Token missing or malformed');
    }

    const token = authHeader.split(' ')[1];

    // Check token validity in Redis
    const isValid = await this.redisService.get(`jwt:${token}`);
    if (!isValid) {
      throw new UnauthorizedException('Invalid token');
    }

    // Validate token structure
    try {
      const payload = this.jwtService.verify(token);
      request.user = payload; // Attach payload to request
    } catch {
      throw new UnauthorizedException('Token verification failed');
    }

    return true;
  }
}
