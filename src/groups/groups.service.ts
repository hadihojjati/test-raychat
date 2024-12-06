import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Group,GroupDocument  } from './schemas/group.schema';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';

@Injectable()
export class GroupService {
  constructor(@InjectModel(Group.name) private groupModel: Model<GroupDocument>) {}

  async create(createGroupDto: CreateGroupDto): Promise<Group> {
    const newGroup = new this.groupModel(createGroupDto);
    return newGroup.save();
  }

  // Find multiple groups by their IDs
  async findByIds(groupIds: Types.ObjectId[]): Promise<Group[]> {
    return this.groupModel.find({ _id: { $in: groupIds } }).exec();
  }
  
  async update(id: string, updateGroupDto: UpdateGroupDto): Promise<Group> {
    return this.groupModel.findByIdAndUpdate(id, updateGroupDto, { new: true }).exec();
  }
}
