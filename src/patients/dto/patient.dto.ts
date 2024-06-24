export type IPatientDTO = {
  id: number;
  name: string;
  last_name: string;
  phone: string;
  address: string;
};

export class PatientDTO implements IPatientDTO {
  id: number;
  name: string;
  last_name: string;
  phone: string;
  address: string;

  constructor(data: IPatientDTO) {
    this.id = data.id;
    this.name = data.name;
    this.last_name = data.last_name;
    this.phone = data.phone;
    this.address = data.address;
  }
}
