import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    public jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async findOne(param: { id: string }) {
    return await this.userService.findOne(param);
  }
}
