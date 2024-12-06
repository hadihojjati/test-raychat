import { IsNotEmpty, IsString } from 'class-validator';

export class CreateHipDto {
    @IsNotEmpty()
    @IsString()
    hipName: string;
	
    @IsNotEmpty()
    @IsString()
    hipCode: string;
	
	@IsNotEmpty()
    @IsString()
    id: string;
}
