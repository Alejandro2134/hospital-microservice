import { AppConstants } from 'src/utils/constanst';
import { Appointment } from './models/appointment.model';

export const appointmentsProviders = [
  {
    provide: AppConstants.APPOINTMENTS_PROVIDER,
    useValue: Appointment,
  },
];
