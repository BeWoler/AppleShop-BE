import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Advantage, AdvantageSchema } from 'src/schemas/advantage.schema';
import { AdvantageController } from './advantage.controller';
import { AdvantageService } from './advantage.service';

@Module({
  controllers: [AdvantageController],
  providers: [AdvantageService],
  imports: [
    MongooseModule.forFeature([
      { name: Advantage.name, schema: AdvantageSchema },
    ]),
  ],
  exports: [AdvantageService],
})
export class AdvantageModule {}
