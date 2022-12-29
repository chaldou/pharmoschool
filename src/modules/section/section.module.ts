import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { Section } from 'src/entities/section.entity';

@Module({
    imports:[
        MikroOrmModule.forFeature({ entities: [Section] }),
    ],
    providers:[],
    exports:[]
})
export class SectionModule {}
