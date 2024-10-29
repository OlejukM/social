import { IsArray, IsNotEmpty, IsOptional } from "class-validator";

export class CreateThougthDto {
    @IsNotEmpty()
    text: string;

    @IsOptional()
    @IsArray()
    likes: string[];

    @IsOptional()
    @IsArray()
    comments: string[];
}