import { Module } from '@nestjs/common';
import { HafasModule } from './hafas/hafas.module';

@Module({
  imports: [HafasModule],
})
export class AppModule {}
