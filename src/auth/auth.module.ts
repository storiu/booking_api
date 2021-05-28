import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { LocalStrategy } from '../guards/local.strategy';

@Module({
  imports: [
    UsersModule
  ],
  providers: [
    AuthService,
    LocalStrategy
  ],
  exports: [AuthService]
})
export class AuthModule {}
