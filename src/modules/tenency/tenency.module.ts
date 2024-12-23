import { Global, MiddlewareConsumer, Module, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request as ExpressRequest } from 'express';
import { tenancyMiddleware } from './tenency.middleware';
import { CONNECTION } from './tenency.symbol';
import { getTenantConnection } from './tenancy.utils';
import { UserModule } from '../tenented/user/user.module';
import { DepartmentModule } from '../tenented/department/department.module';
import { MasterAccountModule } from '../masterAccount/masterAccount.module';
import { AuthModule } from '../tenented/auth/auth.module';

const connectionFactory = {
  provide: CONNECTION,
  scope: Scope.REQUEST,
  useFactory: async (request: ExpressRequest) => {
    const { tenantId }: any = request;
    if (tenantId) {
      return await getTenantConnection(tenantId);
    }
    return null;
  },
  inject: [REQUEST],
};

@Global()
@Module({
  imports: [UserModule, DepartmentModule, MasterAccountModule, AuthModule],
  providers: [connectionFactory],
  exports: [CONNECTION],
})
export class TenencyModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(tenancyMiddleware).forRoutes('/v1');
  }
}
