import { IsEmail, IsNotEmpty, IsStrongPassword } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsStrongPassword({ 
        minLength: 8, 
        minUppercase: 1, 
        minLowercase: 1, 
        minNumbers: 1, 
        minSymbols: 1 
    })
    password: string;
}