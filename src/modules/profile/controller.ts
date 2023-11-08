import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { ProfileService } from './service';

class CreateProfileDto {
  name: string;
}
@Controller('/profile')
export class ProfileController {
  private readonly logger = new Logger(ProfileController.name);

  constructor(private profileService: ProfileService) {}
  @Get()
  async findAll(): Promise<any[]> {
    const result = await this.profileService.findAll();

    return result;
  }

  @Post()
  async create(@Body() body: CreateProfileDto): Promise<boolean> {
    return this.profileService.create(body.name);
  }
}
