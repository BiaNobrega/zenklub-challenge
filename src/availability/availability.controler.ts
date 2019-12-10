import { Body, Controller, Delete, Get, HttpStatus, Logger, Param, Post, Put } from '@nestjs/common';
import { ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { ProfessionalIdDto } from '@shared/dtos/professional-id.dto';
import { AvailabilityIdDto } from './dtos/availability-id.dto';
import { ProfessionalAvailabilityDto } from './dtos/professional-availability.dto';
import { AvailabilityService } from './providers/services/availability.service';

@ApiUseTags('professionals')
@Controller('/v1/professionals/:professionalId/availabilities')
export class AvailabilityController {
  constructor(private readonly availabilityService: AvailabilityService) {}

  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success'
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Availability not found.'
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Unable to search.'
  })
  public async get(@Param() professionalId: ProfessionalIdDto) {
    Logger.log('Get Professional Availability', AvailabilityController.name);
    return this.availabilityService.get(professionalId.professionalId);
  }

  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Success'
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: 'Availability already registered.'
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'An unexpected error has occurred.'
  })
  public async create(
    @Param() professionalId: ProfessionalIdDto,
    @Body() availabilityDto: ProfessionalAvailabilityDto
  ) {
    Logger.log('Create Professional Availability', AvailabilityController.name);
    return this.availabilityService.create(
      professionalId.professionalId,
      availabilityDto
    );
  }

  @Put(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success'
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: 'Availability already registered.'
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Availability not found.'
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'An unexpected error has occurred.'
  })
  public async update(
    @Param() id: AvailabilityIdDto,
    @Body() availabilityDto: ProfessionalAvailabilityDto
  ) {
    Logger.log('Update Professional Availability', AvailabilityController.name);
    return this.availabilityService.update(id, availabilityDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success'
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Availability not found.'
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'An unexpected error has occurred.'
  })
  public async remove(@Param() id: AvailabilityIdDto) {
    Logger.log('Remove Professional Availability', AvailabilityController.name);
    return this.availabilityService.remove(id.id);
  }
}
