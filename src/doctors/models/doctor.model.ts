import { Table, Model, Column } from 'sequelize-typescript';

@Table({ timestamps: true })
export class Doctor extends Model {
  @Column
  name: string;

  @Column
  lastName: string;

  @Column
  cc: string;

  @Column
  position: string;
}
