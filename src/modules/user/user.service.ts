import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './database/user.db.entity';

@Injectable()
export class UserService {
  constructor() {}
}
