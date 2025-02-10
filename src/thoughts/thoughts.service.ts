import { Injectable } from '@nestjs/common';
import { Thought } from '../schemas/createThought.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateThoughtDto } from 'src/dtos/CreateThoughtDto';

@Injectable()
export class ThoughtsService {
    constructor(@InjectModel(Thought.name) private thoughtModel: Model<Thought>) { }
    async createThoughts(thought: CreateThoughtDto): Promise<Thought> {
        const newThought = new this.thoughtModel(thought);

        return await newThought.save();
    }

    async getThoughts(): Promise<Thought[]> {
        return await this.thoughtModel.find().exec();
    }
}
