import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';
import { Group } from '../../groups/schemas/group.schema';

export type UserDocument = User & Document;
@Schema()
//export class User extends Document {
	export class User {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  //@Prop([{ type: MongooseSchema.Types.ObjectId, ref: 'Group' }])
 @Prop({ type: [{ type: Types.ObjectId, ref: 'Group' }] })
  groupIds: Types.ObjectId[];  // Array of group ObjectId references
  
  _id: Types.ObjectId;  // Explicitly define _id field here for TypeScript
}

export const UserSchema = SchemaFactory.createForClass(User);
