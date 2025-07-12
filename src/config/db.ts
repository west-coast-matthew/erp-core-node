import { DatabaseType, DataSource } from 'typeorm';

/**
 * Establishes a connection to the database using TypeORM.
 * 
 * Accepts connection related arguments (host, account, etc) in addition to a collection 
 * of entities to be used by the ORM. The idea here is that we will centralize the lower level 
 * details of the ORM connection and allow the rest of the application to use this connection 
 * without needing to know the specifics of how it is established.
 * 
 * Account information 'should' be stored in environment variables, i.e. via donenv.
 * 
 * @param {DatabaseType} datastoreNature - The type of database to connect to (default is 'mysql').
 */

/**
 * Restricts the databaseType to only allow 'mariadb'.
 * 
 * todo: This is a temporary solution to restrict the database type to 'mariadb'.
 * In the future, we may want to allow other database types, so this should be revisited.
 * Additional opportunity exists for migrations, subscribers, etc....
 */
export type AllowedDatabaseType = Extract<DatabaseType, 'mariadb'>;

export const testDb = (name:string):void=>{
  console.log(`Test DB: ${name}`);

}

export function createOrmConnection(options: {
     type: 'mysql' | 'postgres' | 'sqlite' | string;
     host: string;
     port: number;
     username: string;
     password: string;
     database: string;
     synchronize: boolean;
     entities: string[];
     migrations?: string[];
   }): DataSource | null{


    return null;
}