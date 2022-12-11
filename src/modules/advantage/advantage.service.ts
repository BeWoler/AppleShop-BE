import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Advantage, AdvantageDocument } from 'src/schemas/advantage.schema';
import { AdvantageRequestDto } from './dtos/advantage.request.dto';
import { AdvantageResultDto } from './dtos/advantage.result.dto';
import {
  GetAdvantageResponseDto,
  GetAdvantagesResponseDto,
} from './dtos/getAdvantage.response.dto';

@Injectable()
export class AdvantageService {
  constructor(
    @InjectModel(Advantage.name)
    private advantageModel: Model<AdvantageDocument>
  ) {}

  async getAllAdvantages(): Promise<GetAdvantagesResponseDto> {
    const advantages = await this.advantageModel.find();
    return { advantages };
  }

  async getAdvantageById(id: string): Promise<GetAdvantageResponseDto> {
    const advantage = await this.advantageModel.findById(id);
    return { advantage };
  }

  async createAdvantage(
    body: AdvantageRequestDto
  ): Promise<GetAdvantageResponseDto> {
    const advantage = await this.advantageModel.create(body);
    return { advantage };
  }

  async createManyAdvantages(
    body: Array<AdvantageRequestDto>
  ): Promise<GetAdvantagesResponseDto> {
    const advantages = await this.advantageModel.insertMany(body);
    return { advantages };
  }

  async updateAdvantage(
    id: string,
    body: AdvantageRequestDto
  ): Promise<GetAdvantageResponseDto> {
    const advantage = await this.advantageModel.findOneAndUpdate(
      { id },
      { $set: { ...body } },
      { new: true }
    );
    return { advantage };
  }

  async deleteAdvantage(id: string): Promise<AdvantageResultDto> {
    const advantage = await this.advantageModel.findOneAndDelete({ id });
    return advantage && { result: true };
  }

  async deleteManyAdvantages(id: Array<string>): Promise<AdvantageResultDto> {
    const advantages = await this.advantageModel.deleteMany({
      _id: { $in: id },
    });
    return advantages && { result: true };
  }
}
