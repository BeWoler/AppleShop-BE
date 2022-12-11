import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { DiscountService } from './discount.service';
import { DiscountRequestDto } from './dtos/discount.request.dto';
import { DiscountResultDto } from './dtos/discount.result.dto';
import {
  GetDiscountResponseDto,
  GetDiscountsResponseDto,
} from './dtos/getDiscount.response.dto';

@Controller('discount')
export class DiscountController {
  constructor(private readonly discountService: DiscountService) {}

  @Get()
  async getAllDiscounts(): Promise<GetDiscountsResponseDto> {
    return this.discountService.getAllDiscounts();
  }

  @Get('/:id')
  async getDiscountById(
    @Param('id') id: string
  ): Promise<GetDiscountResponseDto> {
    return this.discountService.getDiscountById(id);
  }

  @Post()
  async createDiscount(@Body() body: DiscountRequestDto) {
    return this.discountService.createDiscount(body);
  }

  @Post('discounts')
  async createManyDiscounts(@Body() body: Array<DiscountRequestDto>) {
    return this.discountService.createManyDiscounts(body);
  }

  @Patch('/:id')
  async updateDiscount(
    @Param('id') id: string,
    @Body() body: DiscountRequestDto
  ): Promise<GetDiscountResponseDto> {
    return this.discountService.updateDiscount(id, body);
  }

  @Delete('/:id')
  async deleteDiscount(@Param('id') id: string): Promise<DiscountResultDto> {
    return this.discountService.deleteDiscount(id);
  }

  @Delete()
  async deleteManyDiscounts(
    @Body() body: Array<string>
  ): Promise<DiscountResultDto> {
    return this.discountService.deleteManyDiscounts(body);
  }
}
