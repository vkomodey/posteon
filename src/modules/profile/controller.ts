import { Controller, Get, Logger } from '@nestjs/common';
import { ProfileService } from './service';

@Controller('/profile')
export class ProfileController {
  private readonly logger = new Logger(ProfileController.name);

  constructor(private profileService: ProfileService) {}
  @Get()
  async findAll(): Promise<string> {
    const result = await this.profileService.findAll();
    this.logger.log(result[0]);

    return 'this is something';
  }
}
