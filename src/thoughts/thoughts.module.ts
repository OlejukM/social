import { Module } from '@nestjs/common';
import { ThoughtsService } from './thoughts.service';
import { ThoughtsController } from './thoughts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Thought, ThoughtSchema } from '../schemas/createThought.schema';

@Module({
  providers: [ThoughtsService],
  controllers: [ThoughtsController],
  imports: [MongooseModule.forFeature([{name: Thought.name, schema: ThoughtSchema}])]
})
export class ThoughtsModule {}
