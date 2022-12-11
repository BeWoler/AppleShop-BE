import { Types } from 'mongoose';

export class DeliveryResponseDto {
  _id?: Types.ObjectId;

  text: string;

  section: string;
}
