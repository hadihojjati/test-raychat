import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { IS_PUBLIC_KEY } from '../common/decorators/public.decorator';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {

    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    // If the route is marked as public, allow access without checking JWT
    if (isPublic) {

      return true;
    }

    // If the route is not public, apply the default JWT authentication logic
    return super.canActivate(context);
  }

  handleRequest(err, user, info) {
    // If an error or no user, throw UnauthorizedException


    if (err || !user) {
      throw err || new UnauthorizedException('Invalid or missing token');
    }

    return user; // Return the authenticated user
  }
}
