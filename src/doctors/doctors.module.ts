import { Module } from '@nestjs/common';
import { AppConstants } from 'src/utils/constanst';
import { Doctor } from './models/doctor.model';
import { DoctorsController } from './controllers/doctor.controller';
import { DoctorsService } from './services/doctors.services';

@Module({
  controllers: [DoctorsController],
  providers: [
    DoctorsService,
    {
      provide: AppConstants.DOCTORS_PROVIDER,
      useValue: Doctor,
    },
  ],
})
export class DoctorsModule {}
