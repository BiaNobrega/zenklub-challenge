import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class ProfessionalIdDto {
  @ApiModelProperty()
  @IsNotEmpty()
  @IsString()
  professionalId: string;
}
