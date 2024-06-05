import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostcellRepository } from './database/postcell.repository';
import { PostcellEntity } from './domain/postcell.entity';
import { Postcell } from './database/postcell.db.entity';

@Module({
  providers: [PostcellRepository, PostcellEntity],
  exports: [PostcellRepository, PostcellEntity],
  imports: [TypeOrmModule.forFeature([Postcell])],
})
export class PostcellModule {}
