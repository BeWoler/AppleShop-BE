import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AdvantageDocument = HydratedDocument<Advantage>;

@Schema()
export class Advantage {
  @Prop()
  title: string;

  @Prop()
  text: string;

  @Prop()
  icon: string;
}

export const AdvantageSchema = SchemaFactory.createForClass(Advantage);
