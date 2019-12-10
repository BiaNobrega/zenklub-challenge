import { Controller, Get, HttpStatus, Logger, Param, Query } from '@nestjs/common';
import { ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { ProfessionalIdDto } from '@shared/dtos/professional-id.dto';
import { SlotQueryDto } from './dtos/slot-query.dto';
import { SlotService } from './slot.service';

@ApiUseTags('professionals')
@Controller('/v1/professionals/:professionalId/slots')
export class SlotController {
  constructor(private slotService: SlotService) {}

  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success'
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Slot not found.'
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Unable to search.'
  })
  public async get(@Param() professionalId: ProfessionalIdDto, @Query() query: SlotQueryDto) {
    Logger.log('Get Slots', SlotController.name);
    return await this.slotService.get(professionalId.professionalId, new Date(query.start), new Date(query.finish));
  }
}
