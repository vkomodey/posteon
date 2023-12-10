import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('/api')
export class APIController {
  @Post('/signup')
  signup(): boolean {
    return true;
  }

  @Post('/signin')
  signin(): boolean {
    return true;
  }

  @Get('/profile')
  getProfile(): boolean {
    return true;
  }

  @Put('/profile')
  updateProfile(): boolean {
    return true;
  }
}
