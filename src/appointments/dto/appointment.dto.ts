import { IDoctorDTO } from 'src/doctors/dto/doctor.dto';
import { IPatientDTO } from 'src/patients/dto/patient.dto';
import { ApiProperty } from '@nestjs/swagger';

type IAppointmentDTO = {
  id: number;
  date: Date;
  state: string;
  doctor: IDoctorDTO;
  patient: IPatientDTO;
  doctor_id: number;
  patient_id: number;
};

export class AppointmentDTO implements IAppointmentDTO {
  id: number;
  date: Date;

  @ApiProperty()
  state: string;

  doctor: IDoctorDTO;
  patient: IPatientDTO;

  @ApiProperty()
  doctor_id: number;

  @ApiProperty()
  patient_id: number;

  constructor(data: IAppointmentDTO) {
    this.id = data.id;
    this.date = data.date;
    this.state = data.state;
    this.doctor = data.doctor;
    this.patient = data.patient;
    this.doctor_id = data.doctor_id;
    this.patient_id = data.patient_id;
  }
}
