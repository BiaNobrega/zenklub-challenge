import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsOptional } from 'class-validator';

export class BookingDto {
  @ApiModelProperty({type: 'string', format: 'date-time'})
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  start: Date;

  @ApiModelProperty({type: 'string', format: 'date-time'})
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  finish: Date;
}
