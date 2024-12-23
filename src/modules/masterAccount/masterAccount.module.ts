import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MasterAccount } from './masterAccount.entity';
import { MasterAccountService } from './masterAccount.service';

@Module({
  imports: [TypeOrmModule.forFeature([MasterAccount])],
  providers: [MasterAccountService],
  exports: [MasterAccountService],
})
export class MasterAccountModule {}
