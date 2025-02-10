import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/dtos/CreateUserDto';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class SignupService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(user: CreateUserDto) {
    const newUser = new this.userModel(user);
    return await newUser.save();
  }
}

