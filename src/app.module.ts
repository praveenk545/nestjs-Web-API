import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserValuesModule } from './user-values/user-values.module';
import { UserValue } from './user-values/entities/user-value.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'tl',
      entities: [UserValue],
      synchronize: true,
    }),
    UserValuesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
