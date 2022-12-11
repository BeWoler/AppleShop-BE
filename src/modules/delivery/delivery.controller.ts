import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { DeliveryRequestDto } from './dtos/delivery.request.dto';
import { DeliveryResultDto } from './dtos/delivery.result.dto';
import {
  GetDeliveriesResponseDto,
  GetDeliveryResponseDto,
} from './dtos/getDelivery.response.dto';

@Controller('delivery')
export class DeliveryController {
  constructor(private readonly deliveryService: DeliveryService) {}

  @Get()
  async getAllDeliveries(): Promise<GetDeliveriesResponseDto> {
    return this.deliveryService.getAllDeliveries();
  }

  @Get('/:id')
  async getDeliveryById(
    @Param('id') id: string
  ): Promise<GetDeliveryResponseDto> {
    return this.deliveryService.getDeliveryById(id);
  }

  @Post()
  async createDelivery(
    @Body() body: DeliveryRequestDto
  ): Promise<GetDeliveryResponseDto> {
    return this.deliveryService.createDelivery(body);
  }

  @Post('deliveries')
  async createManyDeliveries(
    @Body() body: Array<DeliveryRequestDto>
  ): Promise<GetDeliveriesResponseDto> {
    return this.deliveryService.createManyDeliveries(body);
  }

  @Patch('/:id')
  async updateDelivery(
    @Param('id') id: string,
    @Body() body: DeliveryRequestDto
  ): Promise<GetDeliveryResponseDto> {
    return this.deliveryService.updateDelivery(id, body);
  }

  @Delete('/:id')
  async deleteDelivery(@Param('id') id: string): Promise<DeliveryResultDto> {
    return this.deliveryService.deleteDelivery(id);
  }

  @Delete()
  async deleteManyDeliveries(
    @Body() body: Array<string>
  ): Promise<DeliveryResultDto> {
    return this.deliveryService.deleteManyDeliveries(body);
  }
}
