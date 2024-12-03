import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

import * as dotenv from 'dotenv';
import { ThoughtsModule } from './thoughts/thoughts.module';
import { CollageModule } from './collage/collage.module';
import { SignupModule } from './sign-up/signup.module';
dotenv.config();

@Module({
  imports: [MongooseModule.forRoot(process.env.DB_CONNECTION_URL), CollageModule, ThoughtsModule, SignupModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

