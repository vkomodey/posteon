import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsNotEmpty, IsPostalCode, Length } from 'class-validator';
import { states } from 'src/constants/states';

export class AddressDto {
  @IsNotEmpty()
  @IsIn(states)
  @ApiProperty({ description: 'State. 2 letters in USPS style' })
  state: string;

  @IsNotEmpty()
  @Length(2, 100)
  @ApiProperty({ description: 'City' })
  city: string;

  @IsNotEmpty()
  @Length(2, 250)
  @ApiProperty({ description: 'Address Line' })
  address: string;

  @IsNotEmpty()
  @IsPostalCode()
  @ApiProperty({ description: 'Zip Code' })
  zipcode: string;
}
