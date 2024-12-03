import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/CreateUserDto';
import { SignupService } from './singup.service';

@Controller('signup')
export class SignupController {
    constructor(private signupService: SignupService) { }

    @Post()
    async createUser(@Body() user: CreateUserDto) {
        return await this.signupService.createUser(user);
    }
}

