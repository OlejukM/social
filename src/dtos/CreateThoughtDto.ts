import { IsArray, IsNotEmpty, IsOptional } from "class-validator";

export class CreateThoughtDto {
    @IsNotEmpty()
    text: string;

    @IsOptional()
    @IsArray()
    likes: string[];

    @IsOptional()
    @IsArray()
    comments: string[];
}