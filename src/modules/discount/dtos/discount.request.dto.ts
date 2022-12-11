import { IsNotEmpty, IsString } from 'class-validator';

export class DiscountRequestDto {
  @IsNotEmpty()
  @IsString()
  text: string;

  @IsNotEmpty()
  @IsString()
  date: string;
}
