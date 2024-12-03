import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SignupController } from './signup.controller';
import { SignupService } from './singup.service';
import { UserModel, UserSchema } from 'src/schemas/userSchema.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserModel.name, schema: UserSchema }]),
  ],
  controllers: [SignupController],
  providers: [SignupService],
})
export class SignupModule {}
