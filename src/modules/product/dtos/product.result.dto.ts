import { IsNotEmpty } from 'class-validator';

export class ProductResultDto {
  @IsNotEmpty()
  result: boolean;
}
