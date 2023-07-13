import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class atividadeextracurriculares{

@PrimaryGeneratedColumn()
id:number;

@Column()
nome_atividade:string;

@Column()
detalhes:string;

@Column()
id_usuario:number;

}