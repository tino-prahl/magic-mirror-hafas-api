import { Controller, Get, Query } from '@nestjs/common';
import { HafasService } from './hafas.service';
import { Journey } from './journey.interface';

@Controller('hafas')
export class HafasController {
  constructor(private readonly service: HafasService) {}

  @Get('location')
  public location(@Query('term') term: string): any {
    return this.service.location(term);
  }

  @Get('journeys')
  public journeys(
    @Query('from') from: string,
    @Query('to') to: string,
    @Query('results') results = '5',
  ): Promise<Journey[]> {
    return this.service.journeys(from, to, results);
  }
}
