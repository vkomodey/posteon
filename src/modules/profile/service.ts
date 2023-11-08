import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './entity';
import { Repository } from 'typeorm';
import { ProfileProfession } from './entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {}

  findAll(): Promise<Profile[]> {
    return this.profileRepository.find();
  }

  async create(name: string): Promise<boolean> {
    const profile = new Profile();
    profile.firstName = name;
    profile.lastName = name;
    profile.profession = ProfileProfession.CLIENT;
    profile.balance = 0;

    this.profileRepository.save(profile);

    return true;
  }
}
