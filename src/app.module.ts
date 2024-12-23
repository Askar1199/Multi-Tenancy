import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as ormconfig from 'src/orm_configs/orm.config';
import { TenencyModule } from './modules/tenency/tenency.module';
import { DepartmentModule } from './modules/tenented/department/department.module';
import { UserModule } from './modules/tenented/user/user.module';
import { AuthModule } from './modules/tenented/auth/auth.module';
import { MasterAccountModule } from './modules/masterAccount/masterAccount.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    TenencyModule,
    DepartmentModule,
    UserModule,
    AuthModule,
    MasterAccountModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
