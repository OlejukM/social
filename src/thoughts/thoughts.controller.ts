import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateThougthDto } from 'src/dtos/CreateThoughtDto';
import { ThoughtsService } from './thoughts.service';

@Controller('thoughts')
export class ThoughtsController {
    constructor(private thoughtService: ThoughtsService) { }
    @Post()
    createThoughts(@Body() createThoughts: CreateThougthDto) {
        return this.thoughtService.createThoughts(createThoughts);
    }

    @Get()
    getThoughts() {
        return this.thoughtService.getThoughts();
    }
}
