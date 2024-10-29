import { Module } from '@nestjs/common';
import { ThoughtsService } from './thoughts.service';
import { ThoughtsController } from './thoughts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ThoughtModel } from 'src/schemas/createThought.schema';

@Module({
  providers: [ThoughtsService],
  controllers: [ThoughtsController],
  exports: [ThoughtsModule],
  imports: [ThoughtsModule, MongooseModule.forFeature([{name: ThoughtModel.name, schema: ThoughtModel.schema}])]
})
export class ThoughtsModule {}
