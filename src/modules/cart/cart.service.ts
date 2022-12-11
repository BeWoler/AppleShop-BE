import { Injectable } from '@nestjs/common';
import { MailSubjectTypes } from '../mail/interfaces/mail.interface';
import { MailService } from '../mail/mail.service';
import { CartRequestDto } from './dtos/cart.request.dto';

@Injectable()
export class CartService {
  constructor(private readonly mailService: MailService) {}

  async postOrder(body: CartRequestDto): Promise<CartRequestDto> {
    this.mailService.sendMailTo({
      to: process.env.MAIL_SENDLER,
      text: 'Order',
      subject: MailSubjectTypes.order,
      template: 'orderSend',
      context: {
        name: body.name,
        number: body.number,
        adress: body.adress,
        delivery: body.delivery,
        comment: body.comment,
        price: body.price,
        products: body.products,
      },
    });

    return body;
  }
}
