import { Body, Controller, Post } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartRequestDto } from './dtos/cart.request.dto';

@Controller('order')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  async sendMail(@Body() body: CartRequestDto): Promise<CartRequestDto> {
    return this.cartService.postOrder(body);
  }
}
