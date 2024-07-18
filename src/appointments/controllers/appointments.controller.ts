import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Version,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppConstants } from 'src/utils/constanst';
import { AppointmentsService } from '../services/appointments.service';
import { PaginationDTO } from '../dto/pagination.dto';
import { AppointmentDTO } from '../dto/appointment.dto';

@ApiTags(AppConstants.APPOINTMENTS_MODULE_NAME)
@Controller(AppConstants.APPOINTMENTS_MODULE_NAME)
export class AppointmentsController {
  constructor(private appointmentsService: AppointmentsService) {}

  @Version('1')
  @Get()
  async findAll(@Query() pagination: PaginationDTO) {
    return await this.appointmentsService.findAll(pagination.page);
  }

  @Version('1')
  @Post()
  async create(@Body() newAppointment: AppointmentDTO) {
    return await this.appointmentsService.create(newAppointment);
  }

  @Version('1')
  @Put(':id')
  async update(
    @Body() updateAppointment: AppointmentDTO,
    @Param('id') id: string,
  ) {
    return await this.appointmentsService.update(updateAppointment, id);
  }

  @Version('1')
  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.appointmentsService.remove(id);
  }
}
