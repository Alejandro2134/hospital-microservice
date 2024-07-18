import { Module } from '@nestjs/common';
import { DatabaseModule } from './db/db.module';
import { ConfigModule } from '@nestjs/config';
import { PatientsModule } from './patients/patients.module';
import { DoctorsModule } from './doctors/doctors.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true }),
    PatientsModule,
    DoctorsModule,
  ],
})
export class AppModule {}
