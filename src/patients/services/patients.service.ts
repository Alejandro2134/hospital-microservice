import { Inject, Injectable } from '@nestjs/common';
import { Patient } from '../models/patient.model';
import { AppConstants } from 'src/utils/constanst';
import { PatientDTO } from '../dto/patient.dto';

@Injectable()
export class PatientsService {
  constructor(
    @Inject(AppConstants.PATIENTS_PROVIDER)
    private patientsRepo: typeof Patient,
  ) {}

  async findAll(page: number): Promise<PatientDTO[]> {
    const patients = await this.patientsRepo.findAll({
      limit: 10,
      offset: page,
    });
    return patients.map(this.fromModelToDTO);
  }

  async create(patientDTO: PatientDTO): Promise<PatientDTO> {
    const patient = this.fromDTOToModel(patientDTO);
    const newPatient = await this.patientsRepo.create(patient.toJSON());
    return this.fromModelToDTO(newPatient);
  }

  async update(patientDTO: PatientDTO, id: string): Promise<PatientDTO> {
    const patient = this.fromDTOToModel(patientDTO);
    await this.patientsRepo.update(patient.toJSON(), { where: { id } });
    return this.fromModelToDTO(patient);
  }

  async remove(id: string): Promise<void> {
    await this.patientsRepo.destroy({ where: { id } });
  }

  fromModelToDTO(patientModel: Patient): PatientDTO {
    const patientDTO = new PatientDTO({
      name: patientModel.name,
      address: patientModel.address,
      id: patientModel.id,
      last_name: patientModel.lastName,
      phone: patientModel.phone,
    });

    return patientDTO;
  }

  fromDTOToModel(patientDTO: PatientDTO): Patient {
    const patientModel = new Patient({
      name: patientDTO.name,
      address: patientDTO.address,
      id: patientDTO.id,
      lastName: patientDTO.last_name,
      phone: patientDTO.phone,
    });

    return patientModel;
  }
}
