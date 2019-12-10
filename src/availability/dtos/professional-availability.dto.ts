import { ApiModelProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { WeekDayDto } from './weekday.dto';

export class ProfessionalAvailabilityDto {
  @ApiModelProperty()
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  month: number;

  @ApiModelProperty({ type: [WeekDayDto] })
  @IsNotEmpty()
  weekdays: WeekDayDto[];
}
