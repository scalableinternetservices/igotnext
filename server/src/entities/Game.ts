import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Court } from './Court'

@Entity()
export class Game extends BaseEntity {
  @PrimaryGeneratedColumn()
  matchID: number

  // @ManyToOne(() => Aggregate, agg => agg.listOfMatches)
  // agg: Aggregate

  @CreateDateColumn()
  dateOfMatch: Date

  @ManyToOne(() => Court, court => court.game, { eager: true, nullable: false })
  @JoinColumn()
  court: Court

  @Column()
  roster: string

  // The game will either be 'IN_PROGRESS' or 'FINISHED'
  @Column({
    length: 20,
    nullable: true,
  })
  status: string
}
