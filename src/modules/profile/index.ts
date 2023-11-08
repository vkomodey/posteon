import { Module } from '@nestjs/common';
import { ProfileController } from './controller';
import { Profile } from './entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileService } from './service';

@Module({
  controllers: [ProfileController],
  providers: [ProfileService],
  imports: [TypeOrmModule.forFeature([Profile])],
})
export class ProfileModule {}
