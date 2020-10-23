// import { BaseEntity, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
// import { Court } from './Court'
// import { Match } from './Match'
// import { User } from './User'

// @Entity()
// export class Aggregate extends BaseEntity {
//   @PrimaryGeneratedColumn()
//   id: number

//   @OneToMany(() => Match, match => match.agg)
//   listOfMatches: Match[]

//   @OneToMany(() => Court, court => court.agg)
//   listOfCourts: Court[]

//   @OneToMany(() => User, user => user.agg)
//   listOfUsers: User[]
// }
