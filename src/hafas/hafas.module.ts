import { Module } from '@nestjs/common';
import { HafasController } from './hafas.controller';
import { HafasService } from './hafas.service';

@Module({
  controllers: [HafasController],
  providers: [HafasService],
})
export class HafasModule {}
