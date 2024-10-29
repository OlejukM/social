import mongoose, { model, Schema, Document } from 'mongoose';

export interface IUser extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    createdAt: Date,
    updatedAt: Date,
    friends: mongoose.Types.ObjectId[],
}

export const UserSchema = new Schema<IUser> ({
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true },
    createdAt: {
        type: Date,
        default: Date.now,
      },
      updatedAt: {
        type: Date,
        default: Date.now,
      },
      friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
},
{
    timestamps: true,
    collection: 'users',
}
);

UserSchema.pre('save', function (next) {
    this.updatedAt = new Date();
    next();
  });

export const UserModel = model<IUser>('User', UserSchema);