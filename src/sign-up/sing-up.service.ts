import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/dtos/CreateUserDto';
import { IUser, UserModel } from '../schemas/userSchema.schema';

@Injectable()
export class SignupService {
    constructor(@InjectModel(UserModel.name) private userModel: Model<IUser>){}
    async createUser(user: CreateUserDto) {
        console.log('Creating user with data:', user);
        const newUser = new this.userModel(user);
        console.log('---------')
        console.log('111', newUser);

        // return await newUser.save();
    }
}
