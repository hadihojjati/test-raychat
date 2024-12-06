import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateHipDto } from './dtos/create-hip-dto';
import { UpdateHipDto } from './dtos/update-hip-dto';
import { Hip, HipDocument } from '../hips/schema/hip.schema';

@Injectable()
export class HipsService {
    constructor(
        @InjectModel('Hip') private readonly hipsModel: Model<HipDocument>,
    ) {}

    async insertHip(payload: CreateHipDto) {
        const createdHip = new this.hipsModel(payload);
        const result = await createdHip.save();
        return result.id;
    }

    async getHips() {
        const hips = await this.hipsModel.find();
        return hips;
    }

    async getHip(id: string) {
        const hip = await this.hipsModel.findById(id);
        return hip;
    }

    async updateHip(id: string, payload: UpdateHipDto) {
        const updatedHip = await this.hipsModel.findByIdAndUpdate(id, payload, {
            new: true,
        });

        if (!updatedHip) {
            throw new NotFoundException('Hip not found');
        }

        return updatedHip;
    }

    async deleteHip(id: string) {
        const deletedHip = await this.hipsModel.findByIdAndDelete(id);
        return deletedHip;
    }
    async deleteManyHip(ids: string[]): Promise<void> {
        await this.hipsModel.deleteMany({ _id: { $in: ids } }).exec();
    }

}