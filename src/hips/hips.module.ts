import { Module } from '@nestjs/common';
import { HipsService } from './hips.service';
import { HipsController } from './hips.controller';
import { MongooseModule } from '@nestjs/mongoose'; // 1. Import mongoose module
import { HipSchema } from './schema/hip.schema'; // 2. Import hip schema

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Hip', schema: HipSchema }]), // 3. Setup the mongoose module to use the Hip schema
  ],
  controllers: [HipsController],
  providers: [HipsService],
})
export class HipsModule {}
