import { Controller, Post, Body, Headers, Get } from '@nestjs/common';
import { authService } from './auth.service';
import { username } from '../username/user.entity';

@Controller('')
export class AuthController {
  constructor(private readonly authService: authService) {}

  @Post('/login')
  login(@Body() login: username) {
    return this.authService.loginauth(login)
  }
  
}