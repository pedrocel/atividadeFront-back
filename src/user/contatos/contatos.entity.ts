import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class contatos {
  @ApiProperty({ example: 1, description: "ID DO CONTATO" })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: "SENAI", description: "ENDEREÇO DO CONTATO" })
  @Column()
  endereco: string;

  @ApiProperty({ example: 123456789, description: "TELEFONE DO CONTATO" })
  @Column()
  telefone: number;

  @ApiProperty({ example: "MARIO", description: "INSTAGRAM DO CONTATO" })
  @Column()
  instagram: string;

  @ApiProperty({ example: "MARIO", description: "LINKEDIN DO CONTATO" })
  @Column()
  linkedin: string;


  @Column()
  id_usuario:number;

}
