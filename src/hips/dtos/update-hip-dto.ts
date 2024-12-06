import { PartialType } from '@nestjs/mapped-types';
import { CreateHipDto } from './create-hip-dto';

export class UpdateHipDto extends PartialType(CreateHipDto) {}