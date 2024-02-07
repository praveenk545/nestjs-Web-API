import { Module } from '@nestjs/common';
import { UserValuesService } from './user-values.service';
import { UserValuesController } from './user-values.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserValue } from './entities/user-value.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserValue])],
  controllers: [UserValuesController],
  providers: [UserValuesService],
})
export class UserValuesModule {}
