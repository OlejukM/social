import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

import * as dotenv from 'dotenv';
import { ThoughtsModule } from './thoughts/thoughts.module';
import { CollageModule } from './collage/collage.module';
import { SignupModule } from './sign-up/sign-up.module';
dotenv.config();

@Module({
  imports: [MongooseModule.forRoot(process.env.DB_CONNECTION_URL), SignupModule, CollageModule, ThoughtsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
