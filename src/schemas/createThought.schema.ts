import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export interface IThought extends Document {
    text: string;
    likes: string[];
    comments: string[];
}

@Schema()
export class Thought extends Document {
    @Prop({ required: true })
    text: string
    @Prop({ default: [] })
    likes: string[]
    @Prop({ default: [] })
    comments: string[]
}

export const ThoughtSchema = SchemaFactory.createForClass(Thought);