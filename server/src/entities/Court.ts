import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Game } from './Game'
import { Park } from './Park'

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

  @OneToMany(() => Game, game => game.court, { nullable: false })
  game: Game[]

  @ManyToOne(() => Park, park => park.courts, { nullable: false })
  @JoinColumn()
  park: Park
}
