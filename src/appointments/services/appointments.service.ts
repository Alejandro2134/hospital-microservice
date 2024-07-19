import { Inject, Injectable } from '@nestjs/common';
import { Appointment } from '../models/appointment.model';
import { AppConstants } from 'src/utils/constanst';
import { AppointmentDTO } from '../dto/appointment.dto';
import { Doctor } from 'src/doctors/models/doctor.model';
import { Patient } from 'src/patients/models/patient.model';

@Injectable()
export class AppointmentsService {
  constructor(
    @Inject(AppConstants.APPOINTMENTS_PROVIDER)
    private appointmentsRepo: typeof Appointment,
  ) {}

  async findAll(page: number): Promise<AppointmentDTO[]> {
    const appointments = await this.appointmentsRepo.findAll({
      limit: 10,
      offset: page,
      include: [Doctor, Patient],
    });
    return appointments.map((appointment) =>
      this.fromModelToDTO(appointment, true),
    );
  }

  async create(appointmentDTO: AppointmentDTO): Promise<AppointmentDTO> {
    const appointment = this.fromDTOToModel(appointmentDTO);
    const newAppointment = await this.appointmentsRepo.create(
      appointment.toJSON(),
    );
    return this.fromModelToDTO(newAppointment, false);
  }

  async update(
    appointmentDTO: AppointmentDTO,
    id: string,
  ): Promise<AppointmentDTO> {
    const appointment = this.fromDTOToModel(appointmentDTO);
    await this.appointmentsRepo.update(appointment.toJSON(), { where: { id } });
    return this.fromModelToDTO(appointment, false);
  }

  async remove(id: string): Promise<void> {
    await this.appointmentsRepo.destroy({ where: { id } });
  }

  fromModelToDTO(
    appointmentModel: Appointment,
    hasAssociations: boolean,
  ): AppointmentDTO {
    const appointmentDTO = new AppointmentDTO({
      date: appointmentModel.date,
      doctor: {
        cc: hasAssociations ? appointmentModel.doctor.cc : '',
        id: hasAssociations ? appointmentModel.doctor.id : '',
        last_name: hasAssociations ? appointmentModel.doctor.lastName : '',
        name: hasAssociations ? appointmentModel.doctor.name : '',
        position: hasAssociations ? appointmentModel.doctor.position : '',
      },
      id: appointmentModel.id,
      patient: {
        address: hasAssociations ? appointmentModel.patient.address : '',
        id: hasAssociations ? appointmentModel.patient.id : '',
        last_name: hasAssociations ? appointmentModel.patient.lastName : '',
        name: hasAssociations ? appointmentModel.patient.name : '',
        phone: hasAssociations ? appointmentModel.patient.phone : '',
      },
      state: appointmentModel.state,
      doctor_id: appointmentModel.doctorId,
      patient_id: appointmentModel.patientId,
    });

    return appointmentDTO;
  }

  fromDTOToModel(appointmentDTO: AppointmentDTO): Appointment {
    const appointmentModel = new Appointment({
      date: new Date(),
      state: appointmentDTO.state,
      patientId: appointmentDTO.patient_id,
      doctorId: appointmentDTO.doctor_id,
    });

    return appointmentModel;
  }
}
