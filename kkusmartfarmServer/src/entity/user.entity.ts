import {Entity, PrimaryGeneratedColumn, Column, PrimaryColumn} from "typeorm";

@Entity('user')
export class User {

    @PrimaryColumn()
    username: string;

    @Column()
    password:string

    @Column({name:'fname'})
    firstName: string;

    @Column({name:'lname'})
    lastName: string;

    @Column()
    email:string

    @Column({name:'farms'})
    farms:string

    @Column()
    tel:string

}
