import { MikroOrmModule, MikroOrmModuleSyncOptions } from '@mikro-orm/nestjs';
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
  type: "postgresql",
  host:"containers-us-west-178.railway.app" ,
  password:"N1kwfdlK99bXoieChzCo",
  clientUrl: "postgresql://postgres:N1kwfdlK99bXoieChzCo@containers-us-west-178.railway.app:7821/railway",
  metadataProvider: TsMorphMetadataProvider,
  
  migrations: {
    path: './src/migrations',
    allOrNothing: true,
    disableForeignKeys: true,
  },
}


export default config;
