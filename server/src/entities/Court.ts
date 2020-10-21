import { BaseEntity, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Match } from './Match'

@Entity()
export class Court extends BaseEntity {
  @PrimaryGeneratedColumn()
  courtID: number

  // @ManyToOne(() => Aggregate, agg => agg.listOfCourts)
  // agg: Aggregate

  @OneToOne(() => Match, { eager: true })
  @JoinColumn()
  match: Match
}
