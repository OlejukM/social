    import { Body, Controller, FileTypeValidator, Get, Inject, MaxFileSizeValidator, Param, ParseFilePipe, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
    import { FileInterceptor } from '@nestjs/platform-express';
    import { BucketStrategyService } from 'src/services/bucketStrategyService';

    @Controller('collage')
    export class CollageController {
        constructor(
            @Inject('BucketStrategyService')
            private readonly bucketStrategyService: BucketStrategyService) { }
        @Post('upload')
        @UseInterceptors(FileInterceptor('file'))
        async createCollage(@UploadedFile(
            new ParseFilePipe({
                validators: [
                    new MaxFileSizeValidator({ maxSize: 5 * 1024 * 1024 }),
                    new FileTypeValidator({ fileType: 'image/jpeg' })
                ]
            })
        ) file: Express.Multer.File) {
            const imageId = await this.bucketStrategyService.saveImages(file);

            return { id: imageId };
        }

        @Get('images')
        async getCollage() {
            return await this.bucketStrategyService.getImages();
        }

        @Get('image/:id')
        async getImageById(@Param('id') id: string, @Res() res: Response) {
                const imageStream = await this.bucketStrategyService.getImageById(id);

                // @ts-ignore
                imageStream.pipe(res);
        }
    }
