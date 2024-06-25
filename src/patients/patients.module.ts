import { Module } from '@nestjs/common';
import { PatientsController } from './controllers/patients.controller';
import { PatientsService } from './services/patients.service';
import { patientsProviders } from './patients.providers';

@Module({
  controllers: [PatientsController],
  providers: [PatientsService, ...patientsProviders],
})
export class PatientsModule {}
