import { Body, Controller, Get, Logger, Param, Post, Query, Req, Res } from '@nestjs/common';
import { UserService } from './user.service';

class CreateProfileDto {
  name: string;
}
@Controller('/user')
export class UserController {
  private readonly logger = new Logger(UserController.name);

  constructor(private usersService: UserService) {}
  @Get()
  async findAll(@Query('firstName') firstName): Promise<any[]> {
    const result = await this.usersService.findAll();

    return result;
  }

  @Post()
  async create(@Body() body: CreateProfileDto): Promise<string> {
    return this.usersService.create(body.name);
  }

  @Get('/:id')
  async getById(@Param('id') id: string): Promise<any> {
    return this.usersService.findById(id);
  }
}
