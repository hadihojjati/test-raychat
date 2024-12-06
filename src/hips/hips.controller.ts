import { Controller, Post, Body, Put,Patch, Param ,Get ,Delete} from '@nestjs/common';
import { CreateHipDto } from './dtos/create-hip-dto';
import { UpdateHipDto } from './dtos/update-hip-dto';
import { HipsService } from './hips.service';
import { Permissions } from '../common/decorators/permissions.decorator';

@Controller('api/hips')
export class HipsController { 
    constructor(private readonly hipsService: HipsService) {}
	
	@Permissions('hips.add')
    @Post()
    async createHip(@Body() createHipDto: CreateHipDto) {
        return this.hipsService.insertHip(createHipDto);
    }
	
	@Permissions('hips.FindAll')
    @Get()
    async getHips() {
        return this.hipsService.getHips();
    }


	@Permissions('hips.Find')
    @Get('/:id')
    async getHip(@Param('id') id: string) {
        return this.hipsService.getHip(id);
    }


	@Permissions('hips.update')
    @Put('/:id')
    async updateHip(
        @Param('id') id: string,
        @Body() updateHipDto: UpdateHipDto,
    ) {
        return this.hipsService.updateHip(id, updateHipDto);
    }


	@Permissions('hips.Delete')
    @Delete('/:id')
    async deleteHip(@Param('id') id: string) {
        return this.hipsService.deleteHip(id);
    }

}