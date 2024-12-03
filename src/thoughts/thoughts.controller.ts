import { Controller, Get, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { ThoughtsService } from './thoughts.service';
import { CreateThoughtDto  } from 'src/dtos/CreateThoughtDto';

@Controller('thoughts')
export class ThoughtsController {
    constructor(private thoughtService: ThoughtsService) {}

    @Post()
    @UsePipes(new ValidationPipe())
    createThoughts(@Body() createThoughts: CreateThoughtDto ) {
        return this.thoughtService.createThoughts(createThoughts);
    }

    @Get()
    getThoughts() {
        return this.thoughtService.getThoughts();
    }
}