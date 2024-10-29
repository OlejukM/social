import { Injectable } from "@nestjs/common";

import { GridFSBucket, GridFSFile, ObjectId } from 'mongodb';
import { BucketStrategyService } from "./bucketStrategyService";
import { InjectConnection } from "@nestjs/mongoose";
import { Connection } from "mongoose";

@Injectable()
export class GridFSImageStrategyService implements BucketStrategyService {
    private bucket: GridFSBucket;
    constructor(@InjectConnection() private readonly connection: Connection) {
        this.bucket = new GridFSBucket(this.connection.db);
    }

    async saveImages(file: Express.Multer.File): Promise<string> {
        const uploadStream = this.bucket.openUploadStream(file.originalname);
        uploadStream.end(file.buffer);
        console.log(this.bucket);

        return new Promise((resolve, reject) => {
            uploadStream.on('finish', () => resolve(uploadStream.id.toString()));
            uploadStream.on('error', reject);
        })
    }

    async getImages(): Promise<any[]> {
        const files: GridFSFile[] = await this.bucket.find({}).toArray();
        const images = files.map(file => ({
            id: file._id,
            filename: file.filename,
            downloadUrl: `${process.env.DB_URL}/collage/image/${file._id}`,
        }))

        return images;
    }

    async getImageById(id: string): Promise<NodeJS.ReadableStream> {
        const downloadStream = this.bucket.openDownloadStream(new ObjectId(id));
        return new Promise((resolve, reject) => {
            downloadStream.on('error', reject);
            resolve(downloadStream);
        });
    }
}