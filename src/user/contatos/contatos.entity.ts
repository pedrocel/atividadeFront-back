import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class contatos{

@PrimaryGeneratedColumn()
id:number;

@Column()
endereco:string;

@Column()
telefone:number

@Column()
instagram:string;

@Column()
linkedin:string;




}