import { Controller, Get, HttpStatus, Logger, NotImplementedException } from '@nestjs/common';
import { ApiResponse, ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('professionals')
@Controller('/v1/professionals/slot')
export class ProfessionalController {

  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success'
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'slot not found'
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'It was not possible to find sale.'
  })
  public async get() {
    Logger.log('Método não implementado', ProfessionalController.name);
    throw new NotImplementedException();
  }
}
