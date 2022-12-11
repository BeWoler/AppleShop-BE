import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DiscountSchema } from 'src/schemas/discount.schema';
import { Discount } from 'src/schemas/discount.schema';
import { DiscountController } from './discount.controller';
import { DiscountService } from './discount.service';

@Module({
  controllers: [DiscountController],
  providers: [DiscountService],
  imports: [
    MongooseModule.forFeature([
      { name: Discount.name, schema: DiscountSchema },
    ]),
  ],
  exports: [DiscountService],
})
export class DiscountModule {}
