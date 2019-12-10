import { ApiModelProperty } from '@nestjs/swagger';
import { ProfessionalIdDto } from '@shared/dtos/professional-id.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class AvailabilityIdDto extends ProfessionalIdDto {
  @ApiModelProperty()
  @IsNotEmpty()
  @IsString()
  id: string;
}
