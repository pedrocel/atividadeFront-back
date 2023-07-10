import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class username{

@PrimaryGeneratedColumn()
id:number;

@Column()
nome:string;

@Column()
cpf:number;

@Column()
usuario:string;

@Column()
password:string;




}