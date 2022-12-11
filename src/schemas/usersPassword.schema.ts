import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { User } from './user.schema';

export type UserPasswordDocument = HydratedDocument<UserPassword>;

@Schema()
export class UserPassword {
  @Prop({ type: Types.ObjectId, ref: 'User' })
  userId: User;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(UserPassword);
