import { Injectable } from '@nestjs/common';
import * as createClient from 'hafas-client';
import * as hvvProfile from 'hafas-client/p/hvv';
import { Journey } from './journey.interface';

@Injectable()
export class HafasService {
  private client: any;

  constructor() {
    this.client = createClient(hvvProfile, 'magic-mirror-hafas-api');
  }

  public location(term: string) {
    return this.client.locations(term);
  }

  public async journeys(from: string, to: string, results): Promise<Journey[]> {
    const result = await this.client.journeys(from, to, {
      results,
    });
    return result.journeys;
  }
}
