import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { LocalStrategy } from '../guards/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from '../common/constants/constants';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s'},
    })
  ],
  providers: [AuthService, LocalStrategy],
  exports: [AuthService, LocalStrategy],
})
export class AuthModule {}
