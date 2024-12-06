import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GroupService } from './groups.service';
import { GroupsController } from './groups.controller';
import { Group, GroupSchema } from './schemas/group.schema';
import { UsersModule } from '../users/users.module';
@Module({
  imports: [MongooseModule.forFeature([{ name: Group.name, schema: GroupSchema }]),
  UsersModule
  
  ],
  controllers: [GroupsController],
  providers: [GroupService],
  exports: [GroupService],
})
export class GroupsModule {}
