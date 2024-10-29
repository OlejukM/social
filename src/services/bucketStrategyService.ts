import { GridFSFile } from 'mongodb';

export interface BucketStrategyService {
    saveImages(file: Express.Multer.File): Promise<string>;
    getImages(): Promise<GridFSFile[]>;
    getImageById(id: string): Promise<NodeJS.ReadableStream>
}