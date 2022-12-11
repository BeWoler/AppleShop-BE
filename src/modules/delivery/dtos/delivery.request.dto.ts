import { IsNotEmpty, IsString } from 'class-validator';

export class DeliveryRequestDto {
  @IsNotEmpty()
  @IsString()
  text: string;

  @IsNotEmpty()
  @IsString()
  section: string;
}
