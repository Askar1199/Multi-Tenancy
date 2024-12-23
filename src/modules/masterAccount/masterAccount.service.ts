import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MasterAccount } from './masterAccount.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MasterAccountService {
  constructor(
    @InjectRepository(MasterAccount)
    private readonly accountModel: Repository<MasterAccount>,
  ) {}

  async findOne(param: any) {
    return await this.accountModel.findOne({ where: param });
  }
}
