import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController, UnAuthController } from './auth.controller';
import { UnAuthService } from './unauth.service';
import { AuthService } from './auth.service';
import {
  JwtAccessRefreshTokenStrategy,
  JwtAccessTokenStrategy,
} from 'src/jwt/jwt-strategy';

@Module({
  imports: [UserModule, JwtModule.register({})],
  controllers: [UnAuthController, AuthController],
  providers: [
    UnAuthService,
    AuthService,
    JwtAccessRefreshTokenStrategy,
    JwtAccessTokenStrategy,
  ],
})
export class AuthModule {}
