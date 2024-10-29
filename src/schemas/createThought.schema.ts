import { model, Schema, Document } from 'mongoose';

export interface IThought extends Document {
    text: string;
    likes: string[];
    comments: string[];
}

export const PostThoughtSchema = new Schema<IThought> ({
    text: { type: String, required: true},
    likes: { type: [String], default: []},
    comments: { type: [String], default: [] }
},
{
    timestamps: true,
    collection: 'thoughts',
}
)

export const ThoughtModel = model<IThought>('Thought', PostThoughtSchema);