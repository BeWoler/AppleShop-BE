import { Types } from 'mongoose';
import {
  IProductFeatures,
  IProductPhotos,
} from '../interfaces/product.interface';

export class ProductResponseDto {
  _id?: Types.ObjectId;

  title: string;

  photos: Array<IProductPhotos>;

  price: string;

  description: string;

  colors: Array<string>;

  features: Array<IProductFeatures>;
}
