import { Test, TestingModule } from '@nestjs/testing';
import { ApartmentsResolver } from './apartments.resolver';
import { ApartmentsService } from './apartments.service';

describe('ApartmentsResolver', () => {
  let resolver: ApartmentsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApartmentsResolver, ApartmentsService],
    }).compile();

    resolver = module.get<ApartmentsResolver>(ApartmentsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
