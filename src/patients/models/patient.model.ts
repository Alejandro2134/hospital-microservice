import { Table, Model, Column } from 'sequelize-typescript';

@Table({ timestamps: true })
export class Patient extends Model {
  @Column
  name: string;

  @Column
  lastName: string;

  @Column
  phone: string;

  @Column
  address: string;
}
