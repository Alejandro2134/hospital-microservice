import { Module } from '@nestjs/common';
import { DatabaseModule } from './db/db.module';
import { ConfigModule } from '@nestjs/config';
import { PatientsModule } from './patients/patients.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true }),
    PatientsModule,
  ],
})
export class AppModule {}
