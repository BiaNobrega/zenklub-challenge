import { ApiModelProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty } from 'class-validator';

export class SlotQueryDto {
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
