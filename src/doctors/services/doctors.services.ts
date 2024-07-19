import { Inject, Injectable } from '@nestjs/common';
import { AppConstants } from 'src/utils/constanst';
import { Doctor } from '../models/doctor.model';
import { DoctorRequest } from '../dto/doctor.request';

@Injectable()
export class DoctorsService {
  constructor(
    @Inject(AppConstants.DOCTORS_PROVIDER)
    private doctors: typeof Doctor,
  ) {}

  async create(doctor: DoctorRequest) {
    const result = await this.doctors.create({
      ...doctor,
    });
    return result;
  }
  async findOneById(id: number) {
    const result = await this.doctors.findOne({
      where: {
        id,
      },
    });
    return result;
  }

  async update(id: number, doctor: DoctorRequest) {
    const result = await this.doctors.update(
      {
        ...doctor,
      },
      {
        where: {
          id,
        },
      },
    );
    return result;
  }

  async deleteById(id: number) {
    const result = await this.doctors.destroy({
      where: {
        id,
      },
    });
    return result;
  }
}
