import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { OrmModule } from './orm/orm.module';
import { CountriesModule } from './countries/countries.module';
import { CitiesModule } from './cities/cities.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    OrmModule,
    GraphQLModule.forRoot({ autoSchemaFile: true }),
    CountriesModule,
    CitiesModule,
    UsersModule,
  ],
})
export class AppModule {}
