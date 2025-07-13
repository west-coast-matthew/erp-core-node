// shared/db/createDataSource.ts
import { DataSource, DataSourceOptions } from 'typeorm';
import { DatabaseType } from 'typeorm/driver/types/DatabaseType';

export interface CreateDataSourceParams {
  type: DatabaseType;
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  entities: DataSourceOptions['entities'];
  synchronize?: boolean;
  logging?: boolean;
  ssl?: boolean;
}

export const createDataSource = (params: CreateDataSourceParams): DataSource => {
  const options: DataSourceOptions = {
    type: 'mariadb',
    host: params.host,
    port: params.port,
    username: params.username,
    password: params.password,
    database: params.database,
    entities: params.entities,
    synchronize: params.synchronize ?? false,
    logging: params.logging ?? false,
    ssl: params.ssl ?? false,
  };

  return new DataSource(options);
};
