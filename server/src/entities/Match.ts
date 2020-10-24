import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'

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
  @Column({
    length: 20,
    nullable: true,
  })
  status: string
}
