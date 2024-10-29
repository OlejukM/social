import { Module } from '@nestjs/common';
import { CollageController } from './collage.controller';
import { GridFSImageStrategyService } from 'src/services/gridFsService';

@Module({
  providers: [
    {
      provide: 'BucketStrategyService',
      useClass: GridFSImageStrategyService,
    },
  ],
  controllers: [CollageController],
  exports: [CollageModule, 'BucketStrategyService'],
})
export class CollageModule {}
