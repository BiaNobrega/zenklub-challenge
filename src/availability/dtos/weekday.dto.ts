import { ApiModelProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { AvailabilityDto } from './availability.dto';

export class WeekDayDto {
  @ApiModelProperty()
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  weekDay: number;

  @ApiModelProperty({ type: [AvailabilityDto] })
  @IsNotEmpty()
  availabilities: AvailabilityDto[];
}
