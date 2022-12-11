import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { MongooseModule } from '@nestjs/mongoose';
import { AdvantageModule } from './modules/advantage/advantage.module';
import { CartModule } from './modules/cart/cart.module';
import { DeliveryModule } from './modules/delivery/delivery.module';
import { DiscountModule } from './modules/discount/discount.module';
import { MailModule } from './modules/mail/mail.module';
import { ProductModule } from './modules/product/product.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(
      `mongodb+srv://root:${process.env.DB_PASS}@appleshop.cv01joc.mongodb.net/?retryWrites=true&w=majority`
    ),
    EventEmitterModule.forRoot(),
    ProductModule,
    DeliveryModule,
    AdvantageModule,
    DiscountModule,
    CartModule,
    MailModule,
  ],
})
export class AppModule {}
