import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class escolaridade{

@PrimaryGeneratedColumn()
id:number;

@Column()
nome_instituicao:string;

@Column()
nome_curso:string;

@Column()
ano_conclusao:string;

@Column()
id_usuario:number;



}