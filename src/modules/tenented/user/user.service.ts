import { Inject, Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { User } from './user.entity';
import { CONNECTION } from 'src/modules/tenency/tenency.symbol';

@Injectable()
export class UserService {
  private readonly userModel: Repository<User>;
  private readonly connection: DataSource;
  constructor(@Inject(CONNECTION) connection: DataSource) {
    this.userModel = connection.getRepository(User);
    this.connection = connection;
  }

  async findOne(params: { id: string }) {
    return await this.userModel.findOne({ where: params });
  }
}
