import { Controller, Post, Body, Put, Param } from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Permissions } from '../common/decorators/permissions.decorator';

@Controller('api/users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Permissions('users.add')
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Permissions('users.update')
  @Post('/:id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }
}
 