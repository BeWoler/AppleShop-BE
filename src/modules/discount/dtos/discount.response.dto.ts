import { Types } from 'mongoose';

export class DiscountResponseDto {
  _id?: Types.ObjectId;

  text: string;

  date: string;
}
