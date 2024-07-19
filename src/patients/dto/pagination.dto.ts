import { ApiProperty } from '@nestjs/swagger';

export type IPaginationDTO = {
  page: number;
};

export class PaginationDTO implements IPaginationDTO {
  @ApiProperty({ default: 0, minimum: 0, required: false })
  page: number;

  constructor(data: IPaginationDTO) {
    this.page = data.page;
  }
}
