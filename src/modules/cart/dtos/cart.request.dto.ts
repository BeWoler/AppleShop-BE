import { IsNotEmpty, IsString } from 'class-validator';
import { IProduct } from 'src/modules/product/interfaces/product.interface';

export class CartRequestDto {
  // @IsNotEmpty()
  // @IsString()
  products: Array<IProduct>;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  number: string;

  @IsNotEmpty()
  @IsString()
  adress: string;

  @IsNotEmpty()
  @IsString()
  delivery: string;

  comment: string;

  @IsNotEmpty()
  @IsString()
  price: string;
}
