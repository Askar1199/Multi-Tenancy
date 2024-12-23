import { AbstractEntity } from 'src/utils/abstract.entity';
import { BeforeInsert, Column, Entity } from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Entity({ name: 'User' })
export class User extends AbstractEntity {
  @Column({ unique: true })
  email: string;

  @Column({ nullable: true, select: false })
  password: string;

  @Column({ nullable: true, unique: true, select: false })
  refresh_token: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  mobile_number: string;

  @Column({ default: 'PENDING', enum: ['PENDING', 'ACTIVE', 'INACTIVE'] })
  status: string;

  @BeforeInsert()
  async beforeInsert() {
    if (this.password) {
      this.password = await bcrypt.hash(this.password, 10);
    }
  }
}
