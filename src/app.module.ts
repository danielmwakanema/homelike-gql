import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { OrmModule } from './orm/orm.module';
import { CountriesModule } from './countries/countries.module';
import { CitiesModule } from './cities/cities.module';
import { UsersModule } from './users/users.module';
import { ApartmentsModule } from './apartments/apartments.module';

@Module({
  imports: [
    OrmModule,
    GraphQLModule.forRoot({ autoSchemaFile: true }),
    CountriesModule,
    CitiesModule,
    UsersModule,
    ApartmentsModule,
  ],
})
export class AppModule {}
