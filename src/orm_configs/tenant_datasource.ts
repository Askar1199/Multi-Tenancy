import { join } from 'path';
import { env } from 'src/config';
import { SnakeNamingStrategy } from 'src/utils/snake-naming.strategy';
import { DataSource, DataSourceOptions } from 'typeorm';

export const TenentDataSource = (schema: string) => {
  return new DataSource({
    type: 'postgres',
    host: env.db_host,
    port: env.db_port,
    username: env.db_username,
    password: env.db_password,
    database: env.db_name,
    logging: true,
    schema: schema,
    extra: { idleTimeoutMillis: 1000 },
    entities: [join(__dirname, '../modules/tenented/**/*.entity{.ts,.js}')],
    migrations: [join(__dirname, '../migration/tenented/*{.ts,.js}')],
  });
};

const DataSourceConnection: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: true,
  namingStrategy: new SnakeNamingStrategy(),
  extra: { idleTimeoutMillis: 1000 },
  entities: [join(__dirname, '../modules/tenented/**/*.entity{.ts,.js}')],
  migrations: [join(__dirname, '../migration/admin/*{.ts,.js}')],
};

export const TenantDataSource = new DataSource(DataSourceConnection);
