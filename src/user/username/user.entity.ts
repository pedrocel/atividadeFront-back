import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class username {
  @ApiProperty({ example: 1, description: "ID DO USUARIO" })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: "John Doe", description: "NOME DO USUARIO" })
  @Column()
  nome: string;

  @ApiProperty({ example: 123456789, description: "CPF DO USUARIO" })
  @Column()
  cpf: number;

  @ApiProperty({ example: "john@example.com", description: "USUARIO DO USUARIO" })
  @Column()
  usuario: string;

  @ApiProperty({ example: "password123", description: "SENHA DO USUARIO" })
  @Column()
  password: string;


  @Column()
  id_usuario:number;

}
