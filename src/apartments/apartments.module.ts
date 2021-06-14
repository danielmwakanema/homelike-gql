import { Module } from '@nestjs/common';
import { ApartmentsService } from './apartments.service';
import { ApartmentsResolver } from './apartments.resolver';
import { ApartmentLocationQuery } from './apartment-location.service';

@Module({
  providers: [ApartmentsResolver, ApartmentsService, ApartmentLocationQuery],
})
export class ApartmentsModule {}
