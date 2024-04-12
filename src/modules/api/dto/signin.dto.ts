import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class SigninDTO {
  @IsEmail()
  @ApiProperty({ description: 'User Email' })
  email: string;

  @IsNotEmpty()
  @ApiProperty()
  password: string;
}
