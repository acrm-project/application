import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'

import { IssuesType } from 'src/types/issues.type'
import { VehicleType } from 'src/types/vehicle.type'

@Entity('applications')
export class ApplicationEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false, type: 'int' })
  clientId: number

  @Column({ type: 'json', nullable: true })
  vehicle: VehicleType

  @Column({ type: 'json', nullable: true })
  issues: IssuesType

  @Column({ type: 'varchar' })
  status: string

  @CreateDateColumn()
  createdAt: string

  @Column({ nullable: true })
  startedAt: string

  @Column({ nullable: true })
  closedAt: string

  @Column({ type: 'bool', nullable: false })
  closed: boolean
}
