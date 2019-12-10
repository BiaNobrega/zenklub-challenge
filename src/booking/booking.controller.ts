import {
  Body,
  Controller,
  HttpStatus,
  Logger,
  Param,
  Post
} from '@nestjs/common';
import { ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { ProfessionalIdDto } from '@shared/dtos/professional-id.dto';
import { BookingDto } from './dtos/booking.dto';
import { BookingService } from './providers/services/booking.service';

@ApiUseTags('professionals')
@Controller('/v1/professionals/:professionalId/booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Success'
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: 'Date not available.'
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'An unexpected error has occurred.'
  })
  public async create(
    @Param() professionalId: ProfessionalIdDto,
    @Body() bookingDto: BookingDto
  ) {
    Logger.log('Create Booking', BookingController.name);
    await this.bookingService.create(professionalId.professionalId, bookingDto);
  }
}
