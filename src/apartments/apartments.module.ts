import { Module } from '@nestjs/common';
import { ApartmentsService } from './apartments.service';
import { ApartmentsResolver } from './apartments.resolver';

@Module({
  providers: [ApartmentsResolver, ApartmentsService],
})
export class ApartmentsModule {}
