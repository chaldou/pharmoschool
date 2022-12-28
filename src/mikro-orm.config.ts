import { MikroOrmModule, MikroOrmModuleSyncOptions } from '@mikro-orm/nestjs';
// import * as dotenv from 'dotenv';
import { Options } from '@mikro-orm/core';
import { ConfigService } from '@nestjs/config';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';

// dotenv.config();

// const config =  MikroOrmModule.forRoot({
//   entities: ['./dist/entities'],
//   entitiesTs: ['./src/entities'],
//   dbName: "ruff_school_db_test",
//   type: 'postgresql',
//   password:"Choupy270991",
  
//   migrations: {
//     path: './migrations',
//     allOrNothing: true,
//     disableForeignKeys: true,
//   },
// })

// const config: MikroOrmModuleSyncOptions = {
//     entities: ['./dist/entities'],
//     entitiesTs: ['./src/entities'],
//     dbName: "ruff_school_db_test",
//     type: 'postgresql',
//     password:"Choupy270991",
//     metadataProvider: TsMorphMetadataProvider,
    
//     migrations: {
//       path: './src/migrations',
//       allOrNothing: true,
//       disableForeignKeys: true,
//     },
// }

const config: MikroOrmModuleSyncOptions = {
  entities: ['./dist/entities'],
  entitiesTs: ['./src/entities'],
  dbName: "railway",
  user: 'postgres',
  host:"containers-us-west-144.railway.app" ,
  password:"IllWZ38MLE1HApV52kw0",
  clientUrl: "postgresql://postgres:IllWZ38MLE1HApV52kw0@containers-us-west-144.railway.app:7432/railway",
  metadataProvider: TsMorphMetadataProvider,
  
  migrations: {
    path: './src/migrations',
    allOrNothing: true,
    disableForeignKeys: true,
  },
}


export default config;
