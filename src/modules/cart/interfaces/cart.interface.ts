import { IProduct } from 'src/modules/product/interfaces/product.interface';

export class ICart {
  products: Array<IProduct>;
  name: string;
  number: string;
  adress: string;
  delivery: string;
  comment: string;
  price: string;
}
