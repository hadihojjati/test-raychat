import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GroupDocument = Group & Document;

@Schema()
export class Group {
  @Prop({ required: true })
  name: string;

  @Prop({ type: [String], required: true })
  permissions: string[];  // Array of permissions like 'mines.add', 'datas.delete'
}

export const GroupSchema = SchemaFactory.createForClass(Group);
