import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class experienciaprofissional {
  @ApiProperty({ example: 1, description: "ID DA EXPERIENCIA PROFISSIONAL" })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: "EMPRESA COCA COLA", description: "NOME DA EMPRESA " })
  @Column()
  nome_empresa: string;

  @ApiProperty({ example: "2023", description: "DATA INICIO DO TRABALHO" })
  @Column()
  inicio_trabalho: string;

  @ApiProperty({ example: "2024", description: "FIM DO INICIO DO TRABALHO" })
  @Column()
  fim_trabalho: string;

  @ApiProperty({ example: true, description: "NOME DO TRABALHO ATUAL" })
  @Column()
  trabalho_atual: string;

  @ApiProperty({ example: "ADMINISTRADOR", description: "NOME DO CARGO" })
  @Column()
  cargo: string;

  @Column()
  id_usuario:number;
}
