import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('applications')
export class ApplicationEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false, type: 'int' })
  clientId: number

  @Column({ type: 'json' })
  vehicle: any

  @Column({ type: 'json' })
  issues: any

  @Column({ type: 'varchar' })
  status: string

  @CreateDateColumn()
  createdAt: string

  @Column()
  startedAt: string

  @Column()
  closedAt: string

  @Column()
  closed: string
}
