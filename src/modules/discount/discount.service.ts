import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Discount, DiscountDocument } from 'src/schemas/discount.schema';
import { DiscountRequestDto } from './dtos/discount.request.dto';
import { DiscountResultDto } from './dtos/discount.result.dto';
import {
  GetDiscountResponseDto,
  GetDiscountsResponseDto,
} from './dtos/getDiscount.response.dto';

@Injectable()
export class DiscountService {
  constructor(
    @InjectModel(Discount.name) private discountModel: Model<DiscountDocument>
  ) {}

  async getAllDiscounts(): Promise<GetDiscountsResponseDto> {
    const discounts = await this.discountModel.find();
    return { discounts };
  }

  async getDiscountById(id: string): Promise<GetDiscountResponseDto> {
    const discount = await this.discountModel.findById(id);
    return { discount };
  }

  async createDiscount(
    body: DiscountRequestDto
  ): Promise<GetDiscountResponseDto> {
    const discount = await this.discountModel.create(body);
    return { discount };
  }

  async createManyDiscounts(
    body: Array<DiscountRequestDto>
  ): Promise<GetDiscountsResponseDto> {
    const discounts = await this.discountModel.insertMany(body);
    return { discounts };
  }

  async updateDiscount(
    id: string,
    body: DiscountRequestDto
  ): Promise<GetDiscountResponseDto> {
    const discount = await this.discountModel
      .findOneAndUpdate({ id }, { $set: { ...body } }, { new: true })
      .lean();
    return { discount };
  }

  async deleteDiscount(id: string): Promise<DiscountResultDto> {
    const discount = await this.discountModel.findOneAndDelete({ id });
    return discount && { result: true };
  }

  async deleteManyDiscounts(id: Array<string>): Promise<DiscountResultDto> {
    const discounts = await this.discountModel.deleteMany({ _id: { $in: id } });
    return discounts && { result: true };
  }
}
