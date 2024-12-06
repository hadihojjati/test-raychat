import { CanActivate, ExecutionContext, Injectable ,UnauthorizedException,ForbiddenException} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserService } from '../../users/users.service'; // Import UserService
import { GroupService } from '../../groups/groups.service'; // Import GroupsService
import { Observable } from 'rxjs';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private readonly userService: UserService,
    private readonly groupsService: GroupService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredPermissions = this.reflector.get<string[]>(
      'permissions',
      context.getHandler()
    );
    if (!requiredPermissions) {
      return true; // No specific permissions required, allow access
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;
    if (!user) {
      throw new UnauthorizedException('User is not authenticated');
    }

    // Fetch the user with populated groups
    const populatedUser = await this.userService.findById(user.userId);
    if (!populatedUser) {
      throw new UnauthorizedException('User not found');
    }

    const userGroups = await this.groupsService.findByIds(populatedUser.groupIds);
    if (!this.hasPermission(userGroups, requiredPermissions)) {
      throw new ForbiddenException('دسترسی ندارید!');
    }

    return true;
  }

  hasPermission(groups, requiredPermissions: string[]): boolean {
    for (const group of groups) {
      for (const permission of group.permissions) {
       // if (requiredPermissions.includes(permission)) {

        if (requiredPermissions.includes(permission)|| permission.includes('admin')) {
          return true; // User has the required permission
        }
      }
    }
    return false; // User lacks the required permission
  }
}




