import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DoctorsService } from '../services/doctors.services';
import { DoctorRequest } from '../dto/doctor.request';

@ApiTags('CRUD - Doctors')
@Controller('doctors')
export class DoctorsController {
  constructor(private doctorsService: DoctorsService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('create')
  async createDoctor(@Body() doctor: DoctorRequest) {
    return await this.doctorsService.create(doctor);
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  async getDoctorById(@Param('id', ParseIntPipe) id: number) {
    return await this.doctorsService.findOneById(id);
  }

  @HttpCode(HttpStatus.OK)
  @Put(':id')
  async updateDoctor(
    @Param('id', ParseIntPipe) id: number,
    @Body() doctor: DoctorRequest,
  ) {
    return await this.doctorsService.update(id, doctor);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  async deleteDoctor(@Param('id', ParseIntPipe) id: number) {
    await this.doctorsService.deleteById(id);
  }
}
