import { Inject, Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Department } from './department.entity';
import { CONNECTION } from 'src/modules/tenency/tenency.symbol';

@Injectable()
export class DepartmentService {
  private readonly departmentModel: Repository<Department>;
  private readonly connection: DataSource;
  constructor(@Inject(CONNECTION) connection: DataSource) {
    this.departmentModel = connection.getRepository(Department);
    this.connection = connection;
  }
}
