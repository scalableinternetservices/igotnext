import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Game } from './Game'

@Entity()
export class Court extends BaseEntity {
  @PrimaryGeneratedColumn()
  courtID: number

  // @ManyToOne(() => Aggregate, agg => agg.listOfCourts)
  // agg: Aggregate
  // Display name of court
  @Column()
  courtName: string

  @Column()
  longitude: number

  @Column()
  latitude: number

  // Number of players currently on the court, maximum of 10
  @Column()
  lobby: number

  @Column()
  roster: string

  @OneToMany(() => Game, game => game.court, { nullable: false })
  game: Game[]
}
