import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AvailabilityDto {
  @ApiModelProperty()
  @IsNotEmpty()
  start: string;

  @ApiModelProperty()
  @IsNotEmpty()
  finish: string;
}
