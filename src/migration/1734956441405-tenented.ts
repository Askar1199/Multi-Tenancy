import { MigrationInterface, QueryRunner } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export class Tenented1734956441405 implements MigrationInterface {
  name = 'Tenented1734956441405';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const { schema } = queryRunner.connection
      .options as PostgresConnectionOptions;
    await queryRunner.query(
      `CREATE TABLE "${schema}"."User" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "email" character varying NOT NULL, "password" character varying, "refresh_token" character varying, "name" character varying NOT NULL, "mobile_number" character varying, "status" character varying NOT NULL DEFAULT 'PENDING', CONSTRAINT "UQ_${schema}_4a257d2c9837248d70640b3e36e" UNIQUE ("email"), CONSTRAINT "UQ_${schema}_dfbff9846574cf677d7af2cccff" UNIQUE ("refresh_token"), CONSTRAINT "PK_${schema}_9862f679340fb2388436a5ab3e4" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "${schema}"."department" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "UQ_${schema}_471da4b90e96c1ebe0af221e07b" UNIQUE ("name"), CONSTRAINT "PK_${schema}_9a2213262c1593bffb581e382f5" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "${schema}"."account" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "slug" character varying NOT NULL, CONSTRAINT "UQ_${schema}_414d4052f22837655ff312168cb" UNIQUE ("name"), CONSTRAINT "UQ_${schema}_d4ab593c192bae26a6cf6386332" UNIQUE ("slug"), CONSTRAINT "PK_${schema}_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const { schema } = queryRunner.connection
      .options as PostgresConnectionOptions;
    await queryRunner.query(`DROP TABLE "${schema}"."account"`);
    await queryRunner.query(`DROP TABLE "${schema}"."department"`);
    await queryRunner.query(`DROP TABLE "${schema}"."User"`);
  }
}
