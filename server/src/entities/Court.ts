import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Game } from './Game'

@Entity()
export class Court extends BaseEntity {
  @PrimaryGeneratedColumn()
  courtID: number

  // @ManyToOne(() => Aggregate, agg => agg.listOfCourts)
  // agg: Aggregate
  @Column() // to identify (for frontend)
  courtName: string

  @Column() // for location purposes
  longitude: number

  @Column()
  latitude: number

  @Column() //lobby should be at max 10
  lobby: number

  @OneToMany(() => Game, match => match.court)
  match: Game[]
}
