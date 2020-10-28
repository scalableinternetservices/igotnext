import { BaseEntity, Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Court } from './Court'

@Entity()
export class Park extends BaseEntity {
  @PrimaryGeneratedColumn()
  parkID: number

  // @ManyToOne(() => Aggregate, agg => agg.listOfCourts)
  // agg: Aggregate
  @Column() // to identify (for frontend)
  parkName: string

  @OneToMany(() => Court, court => court.park, { nullable: false, eager: true })
  @JoinColumn()
  courts: Court[]
}
