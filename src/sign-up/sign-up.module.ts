import { Module } from '@nestjs/common';
import { SignupController } from './sign-up.controller';
import { SignupService } from './sing-up.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModel } from 'src/schemas/userSchema.schema';

@Module({
  providers: [SignupService],
  controllers: [SignupController],
  exports: [SignupModule],
  imports: [MongooseModule.forFeature([{name: UserModel.name, schema: UserModel.schema}])]
})
export class SignupModule {}
