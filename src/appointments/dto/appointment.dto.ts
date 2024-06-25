import { IDoctorDTO } from 'src/doctors/dto/doctor.dto';
import { IPatientDTO } from 'src/patients/dto/patient.dto';

type IAppointmentDTO = {
  id: number;
  date: Date;
  state: string;
  doctor: IDoctorDTO;
  patient: IPatientDTO;
};

export class AppointmentDTO implements IAppointmentDTO {
  id: number;
  date: Date;
  state: string;
  doctor: IDoctorDTO;
  patient: IPatientDTO;

  constructor(data: IAppointmentDTO) {
    this.id = data.id;
    this.date = data.date;
    this.state = data.state;
    this.doctor = data.doctor;
    this.patient = data.patient;
  }
}
