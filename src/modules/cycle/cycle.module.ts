import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { Cycle } from 'src/entities/cycle.entity';

@Module({
    imports:[
        MikroOrmModule.forFeature({ entities: [Cycle] }),
    ],
    providers:[],
    exports:[]
})
export class CycleModule {}
