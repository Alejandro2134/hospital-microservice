import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class DoctorRequest {
  @ApiProperty()
  @IsString()
  @MaxLength(10)
  @MinLength(5)
  name: string;

  @ApiProperty()
  @IsString()
  @MaxLength(12)
  @MinLength(8)
  lastName: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @MaxLength(10)
  @MinLength(5)
  cc: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @MaxLength(10)
  @MinLength(5)
  position: string;
}
