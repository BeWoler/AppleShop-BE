import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop()
  title: string;

  @Prop()
  photos: {
    imgLink: string;
    imgColor: string;
    colorName: string;
  }[];

  @Prop()
  price: string;

  @Prop()
  description: string;

  @Prop()
  colors: Array<string>;

  @Prop()
  features: {
    keys: Array<string>;
    values: Array<string>;
  }[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
