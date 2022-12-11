import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Delivery, DeliveryDocument } from 'src/schemas/delivery.schema';
import { DeliveryRequestDto } from './dtos/delivery.request.dto';
import { DeliveryResultDto } from './dtos/delivery.result.dto';
import {
  GetDeliveriesResponseDto,
  GetDeliveryResponseDto,
} from './dtos/getDelivery.response.dto';

@Injectable()
export class DeliveryService {
  constructor(
    @InjectModel(Delivery.name) private deliveryModel: Model<DeliveryDocument>
  ) {}

  async getAllDeliveries(): Promise<GetDeliveriesResponseDto> {
    const deliveries = await this.deliveryModel.find();
    return { deliveries };
  }

  async getDeliveryById(id: string): Promise<GetDeliveryResponseDto> {
    const delivery = await this.deliveryModel.findById(id);
    return { delivery };
  }

  async createDelivery(
    body: DeliveryRequestDto
  ): Promise<GetDeliveryResponseDto> {
    const delivery = await this.deliveryModel.create(body);
    return { delivery };
  }

  async createManyDeliveries(
    body: Array<DeliveryRequestDto>
  ): Promise<GetDeliveriesResponseDto> {
    const deliveries = await this.deliveryModel.insertMany(body);
    return { deliveries };
  }

  async updateDelivery(
    id: string,
    body: DeliveryRequestDto
  ): Promise<GetDeliveryResponseDto> {
    const delivery = await this.deliveryModel.findOneAndUpdate(
      { id },
      { $set: { ...body } },
      { new: true }
    );
    return { delivery };
  }

  async deleteDelivery(id: string): Promise<DeliveryResultDto> {
    const delivery = await this.deliveryModel.findOneAndDelete({ id });
    return delivery && { result: true };
  }

  async deleteManyDeliveries(id: Array<string>): Promise<DeliveryResultDto> {
    const deliveries = await this.deliveryModel.deleteMany({
      _id: { $in: id },
    });
    return deliveries && { result: true };
  }
}
