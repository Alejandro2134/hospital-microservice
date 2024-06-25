import { AppConstants } from 'src/utils/constanst';
import { Patient } from './models/patient.model';

export const patientsProviders = [
  {
    provide: AppConstants.PATIENTS_PROVIDER,
    useValue: Patient,
  },
];
