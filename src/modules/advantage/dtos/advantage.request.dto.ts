import { IsNotEmpty, IsString } from 'class-validator';

export class AdvantageRequestDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  text: string;

  @IsNotEmpty()
  @IsString()
  icon: string;
}
