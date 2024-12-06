import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HipDocument = Hip & Document;

@Schema()
export class Hip {
    @Prop()
    hipName: string;

    @Prop()
    hipCode: string;
	
	@Prop()
    id: string;
}
export const HipSchema = SchemaFactory.createForClass(Hip);
