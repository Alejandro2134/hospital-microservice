export type IDoctorDTO = {
  id: number;
  name: string;
  last_name: string;
  cc: string;
  position: string;
};

export class DoctorDTO implements IDoctorDTO {
  id: number;
  name: string;
  last_name: string;
  cc: string;
  position: string;

  constructor(data: IDoctorDTO) {
    this.id = data.id;
    this.name = data.name;
    this.last_name = data.last_name;
    this.cc = data.cc;
    this.position = data.position;
  }
}
