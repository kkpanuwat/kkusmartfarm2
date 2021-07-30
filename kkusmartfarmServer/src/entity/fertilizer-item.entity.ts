import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm";

@Entity()
export class FertilizerItem {
  @PrimaryGeneratedColumn({ name: "fertilizer_id" })
  fertilizerId: number;

  @Column({ name: "fertilizer_name" })
  name: string;

  @Column({ name: "fertilizer_des" })
  des: string;

  @Column({ name: "fertilizer_status" })
  status: string;

  @Column({ name: "fertilizer_tank_level" })
  tankLevel: number;

  @Column({name:'fertilizer_total'})
  total: number

  @Column({name: 'fertilizer_type'})
  type: string

  @Column({name:'fertilizer_item_topic'})
  topic:string
}
