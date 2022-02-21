import { Controller, Post, Body, Get, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JWTGuard } from './jwt.guard';

@Controller()
export class AuthController {

  constructor(private authService: AuthService) { }

  @Post('login')
  login(@Body() body) {
    return this.authService.login(body.username, body.password);
  }

  // @Role('admin')
  @UseGuards(JWTGuard)
  @Get('test-auth')
  test(@Req() req): any {
    console.log(req)
    return {
      name: req.user.name,
    };
  }
}
