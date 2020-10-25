import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Court } from './Court'

@Entity()
export class Match extends BaseEntity {
  @PrimaryGeneratedColumn()
  matchID: number

  // @ManyToOne(() => Aggregate, agg => agg.listOfMatches)
  // agg: Aggregate

  @CreateDateColumn()
  dateOfMatch: Date

  // done or in-progress
  // will either be "done" or "in-progress" which could be a number but easier to
  // read when coding than remembering nubmers

  @ManyToOne(() => Court, court => court.match)
  @JoinColumn()
  court: Court

  @Column({
    length: 20,
    nullable: true,
  })
  status: string
}
