import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm";

@Entity('refreshToken')
export class RefreshToken {
  @PrimaryGeneratedColumn()
  refreshToken: string;

  @Column()
  expire: Date;

}
