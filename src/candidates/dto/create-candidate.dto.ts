import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCandidateDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsNumber()
  jobId: number;

  @IsNotEmpty()
  @IsNumber()
  companyId: number;
}
