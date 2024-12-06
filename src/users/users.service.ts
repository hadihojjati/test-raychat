import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User ,UserDocument} from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(
  @InjectModel(User.name) private userModel: Model<User>
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
      const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
  const newUser = new this.userModel({ ...createUserDto, password: hashedPassword });
  return newUser.save();
  }

  async findByUsername(username: string): Promise<User | undefined> {

    return this.userModel.findOne({ username }).exec();
  }

  async findById(id: string): Promise<User | undefined> {
    // Instead of calling .exec(), just return the query, so it can be chained with populate
    return this.userModel.findById(id).populate('groupIds').exec(); 
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
  }
}
