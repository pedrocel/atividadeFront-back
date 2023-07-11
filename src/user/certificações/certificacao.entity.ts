import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class certificacoes{

@PrimaryGeneratedColumn()
id:number;

@Column()
nome_certificacao:string;

@Column()
instituicao:string;

@Column()
data_termino:string;

@Column()
id_usuario:number;

}