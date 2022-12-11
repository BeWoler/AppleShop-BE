import { IsNotEmpty, IsString } from 'class-validator';
import {
  IProductFeatures,
  IProductPhotos,
} from '../interfaces/product.interface';

export class ProductRequestDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  photos: Array<IProductPhotos>;

  @IsNotEmpty()
  @IsString()
  price: string;

  @IsString()
  description: string;

  @IsNotEmpty()
  colors: Array<string>;

  @IsNotEmpty()
  features: Array<IProductFeatures>;
}
