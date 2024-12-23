import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'department' })
export class Department {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;
}
