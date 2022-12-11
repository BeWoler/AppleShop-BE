import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { AdvantageService } from './advantage.service';
import { AdvantageRequestDto } from './dtos/advantage.request.dto';
import { AdvantageResultDto } from './dtos/advantage.result.dto';
import {
  GetAdvantageResponseDto,
  GetAdvantagesResponseDto,
} from './dtos/getAdvantage.response.dto';

@Controller('advantage')
export class AdvantageController {
  constructor(private readonly advantageService: AdvantageService) {}

  @Get()
  async getAllAdvantages(): Promise<GetAdvantagesResponseDto> {
    return this.advantageService.getAllAdvantages();
  }

  @Get('/:id')
  async getAdvantageById(
    @Param('id') id: string
  ): Promise<GetAdvantageResponseDto> {
    return this.advantageService.getAdvantageById(id);
  }

  @Post()
  async createAdvantage(
    @Body() body: AdvantageRequestDto
  ): Promise<GetAdvantageResponseDto> {
    return this.advantageService.createAdvantage(body);
  }

  @Post('advantages')
  async createManyAdvantages(
    @Body() body: Array<AdvantageRequestDto>
  ): Promise<GetAdvantagesResponseDto> {
    return this.advantageService.createManyAdvantages(body);
  }

  @Patch('/:id')
  async updateAdvantage(
    @Param('id') id: string,
    @Body() body: AdvantageRequestDto
  ): Promise<GetAdvantageResponseDto> {
    return this.advantageService.updateAdvantage(id, body);
  }

  @Delete('/:id')
  async deleteAdvantage(
    @Param('/:id') id: string
  ): Promise<AdvantageResultDto> {
    return this.advantageService.deleteAdvantage(id);
  }

  @Delete()
  async deleteManyAdvantages(
    @Body() body: Array<string>
  ): Promise<AdvantageResultDto> {
    return this.advantageService.deleteManyAdvantages(body);
  }
}
