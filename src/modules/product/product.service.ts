import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from 'src/schemas/product.schema';
import {
  GetProductResponseDto,
  GetProductsResponseDto,
} from './dtos/getProduct.response.dto';
import { ProductRequestDto } from './dtos/product.request.dto';
import { ProductResultDto } from './dtos/product.result.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>
  ) {}

  async getAllProducts(): Promise<GetProductsResponseDto> {
    const products = await this.productModel.find();
    return { products };
  }

  async getProductById(id: string): Promise<GetProductResponseDto> {
    const product = await this.productModel.findById(id);
    return { product };
  }

  async createProduct(body: ProductRequestDto): Promise<GetProductResponseDto> {
    const product = await this.productModel.create(body);
    return { product };
  }

  async createManyProducts(
    body: Array<ProductRequestDto>
  ): Promise<GetProductsResponseDto> {
    const products = await this.productModel.insertMany(body);
    return { products };
  }

  async updateProduct(
    id: string,
    body: ProductRequestDto
  ): Promise<GetProductResponseDto> {
    const product = await this.productModel
      .findOneAndUpdate({ id }, { $set: { ...body } }, { new: true })
      .lean();
    return { product };
  }

  async deleteProduct(id: string): Promise<ProductResultDto> {
    const product = await this.productModel.findOneAndDelete({ id });
    return product && { result: true };
  }

  async deleteManyProducts(id: Array<string>): Promise<ProductResultDto> {
    const products = await this.productModel.deleteMany({
      _id: { $in: id },
    });
    return products && { result: true };
  }
}
