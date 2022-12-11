import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import {
  GetProductResponseDto,
  GetProductsResponseDto,
} from './dtos/getProduct.response.dto';
import { ProductRequestDto } from './dtos/product.request.dto';
import { ProductResultDto } from './dtos/product.result.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getAllProducts(): Promise<GetProductsResponseDto> {
    return this.productService.getAllProducts();
  }

  @Get('/:id')
  async getProductById(
    @Param('id') id: string
  ): Promise<GetProductResponseDto> {
    return this.productService.getProductById(id);
  }

  @Post()
  async createProduct(
    @Body() body: ProductRequestDto
  ): Promise<GetProductResponseDto> {
    return this.productService.createProduct(body);
  }

  @Post('products')
  async createManyProducts(
    @Body() body: Array<ProductRequestDto>
  ): Promise<GetProductsResponseDto> {
    return this.productService.createManyProducts(body);
  }

  @Patch('/:id')
  async updateProduct(
    @Param('id') id: string,
    @Body() body: ProductRequestDto
  ): Promise<GetProductResponseDto> {
    return this.productService.updateProduct(id, body);
  }

  @Delete('/:id')
  async deleteProduct(@Param('id') id: string): Promise<ProductResultDto> {
    return this.productService.deleteProduct(id);
  }

  @Delete()
  async deleteManyProducts(
    @Body() body: Array<string>
  ): Promise<ProductResultDto> {
    return this.productService.deleteManyProducts(body);
  }
}
