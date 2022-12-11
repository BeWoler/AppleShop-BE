import { Module } from '@nestjs/common';
import { MailModule } from '../mail/mail.module';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';

@Module({
  providers: [CartService],
  controllers: [CartController],
  imports: [MailModule],
  exports: [CartService],
})
export class CartModule {}
