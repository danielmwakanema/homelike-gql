import { Module } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { CitiesResolver } from './cities.resolver';

@Module({
  providers: [CitiesResolver, CitiesService],
})
export class CitiesModule {}
