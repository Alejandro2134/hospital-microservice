import { Module } from '@nestjs/common';
import { appointmentsProviders } from './appointments.providers';
import { AppointmentsService } from './services/appointments.service';
import { AppointmentsController } from './controllers/appointments.controller';

@Module({
  controllers: [AppointmentsController],
  providers: [AppointmentsService, ...appointmentsProviders],
})
export class AppointmentsModule {}
