import { Module } from '@nestjs/common';
import { DatabaseModule } from './db/db.module';
import { ConfigModule } from '@nestjs/config';
import { PatientsModule } from './patients/patients.module';
import { DoctorsModule } from './doctors/doctors.module';
import { AppointmentsModule } from './appointments/appointments.module';


@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true }),
    PatientsModule,
    DoctorsModule,
    AppointmentsModule,
  ],
})
export class AppModule {}
