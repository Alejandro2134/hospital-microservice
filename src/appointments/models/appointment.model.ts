import { Table, Model, Column, BelongsTo } from 'sequelize-typescript';
import { Doctor } from '../../doctors/models/doctor.model';
import { Patient } from '../../patients/models/patient.model';

@Table({ timestamps: true })
export class Appointment extends Model {
  @Column
  date: Date;

  @Column
  state: string;

  @Column
  patientId: number;

  @Column
  doctorId: number;

  @BelongsTo(() => Doctor, 'doctorId')
  doctor: Doctor;

  @BelongsTo(() => Patient, 'patientId')
  patient: Patient;
}
