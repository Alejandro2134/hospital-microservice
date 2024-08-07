import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Version,
  Body,
  Param,
  Query,
  UseGuards,
} from '@nestjs/common';
import { PatientDTO } from '../dto/patient.dto';
import { PatientsService } from '../services/patients.service';
import { ApiTags } from '@nestjs/swagger';
import { AppConstants } from 'src/utils/constanst';
import { PaginationDTO } from '../dto/pagination.dto';
import { AuthGuard } from 'src/utils/guards/auth.guard';

@ApiTags(AppConstants.PATIENTS_MODULE_NAME)
@UseGuards(AuthGuard)
@Controller(AppConstants.PATIENTS_MODULE_NAME)
export class PatientsController {
  constructor(private patientsService: PatientsService) {}

  @Version('1')
  @Get()
  async findAll(@Query() pagination: PaginationDTO) {
    return await this.patientsService.findAll(pagination.page);
  }

  @Version('1')
  @Post()
  async create(@Body() newPatient: PatientDTO) {
    return await this.patientsService.create(newPatient);
  }

  @Version('1')
  @Put(':id')
  async update(@Body() updatePatient: PatientDTO, @Param('id') id: string) {
    return await this.patientsService.update(updatePatient, id);
  }

  @Version('1')
  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.patientsService.remove(id);
  }
}
