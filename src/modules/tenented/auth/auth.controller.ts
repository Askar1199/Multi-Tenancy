import { Controller } from '@nestjs/common';
import { UnAuthService } from './unauth.service';
import { AuthService } from './auth.service';

@Controller('unAuth')
export class UnAuthController {
  constructor(private readonly unauthService: UnAuthService) {}
}

@Controller('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
}
