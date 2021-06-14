import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { PasswordService } from './password.service';
import { JWT_SECRET_KEY, JWT_TTL } from '../environment/environment';
import { JwtStrategy } from './strategies/jwt.strategy';
import { GqlAuthGuard } from './guards/gql-auth.guard';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    JwtModule.register({
      secret: JWT_SECRET_KEY,
      signOptions: { expiresIn: JWT_TTL },
    }),
    UsersModule,
  ],
  providers: [
    AuthResolver,
    AuthService,
    PasswordService,
    JwtStrategy,
    GqlAuthGuard,
  ],
  exports: [AuthService, GqlAuthGuard],
})
export class AuthModule {}
