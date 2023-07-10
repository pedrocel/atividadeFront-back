import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class experienciaprofissional{

@PrimaryGeneratedColumn()
id:number;

@Column()
nome_empresa:string;

@Column()
inicio_trabalho:string;

@Column()
fim_trabalho:string;

@Column()
trabalho_atual:string;

@Column()
cargo:string;




}