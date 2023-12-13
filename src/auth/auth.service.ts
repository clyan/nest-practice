import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(userName: string, pass: string) {
    const user = await this.userService.findOneByUserName(userName);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { userName: user.userName, sub: user.id };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
