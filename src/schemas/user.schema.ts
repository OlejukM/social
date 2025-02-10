import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt: Date,
  updatedAt: Date,
  friends: mongoose.Types.ObjectId[],
}

@Schema()
export class User extends Document {
  @Prop({ required: true })
  firstName: string
  @Prop({ required: true })
  lastName: string
  @Prop({ required: true })
  email: string
  @Prop({ required: true })
  password: string
  @Prop({ default: Date.now })
  createdAt: Date
  @Prop({ default: Date.now })
  updatedAt: Date
  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'User' })
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}

export const UserSchema = SchemaFactory.createForClass(User);