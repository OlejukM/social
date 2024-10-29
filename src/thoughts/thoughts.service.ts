import { Injectable } from '@nestjs/common';
import { IThought, ThoughtModel } from '../schemas/createThought.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateThougthDto } from 'src/dtos/CreateThoughtDto';

@Injectable()
export class ThoughtsService {
    constructor(@InjectModel(ThoughtModel.name) private thoughtModel: Model<IThought>) { }
    async createThoughts(thought: CreateThougthDto): Promise<IThought> {
        const newThought = new this.thoughtModel(thought);

        return await newThought.save();
    }

    async getThoughts(): Promise<IThought[]> {
        return await this.thoughtModel.find().exec();
    }
}
