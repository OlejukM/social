import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/dtos/CreateUserDto';
import { IUser, UserModel } from 'src/schemas/userSchema.schema';
@Injectable()
export class SignupService {
  constructor(@InjectModel(UserModel.name) private readonly userModel: Model<IUser>) {}

  async createUser(user: CreateUserDto) {
    const newUser = new this.userModel(user);
    return await newUser.save();
  }
}

