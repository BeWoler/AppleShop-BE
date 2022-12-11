import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DiscountDocument = HydratedDocument<Discount>;

@Schema()
export class Discount {
  @Prop()
  text: string;

  @Prop()
  date: string;
}

export const DiscountSchema = SchemaFactory.createForClass(Discount);
