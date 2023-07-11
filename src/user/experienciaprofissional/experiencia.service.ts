import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { experienciaprofissional } from "./experiencia.entity";


@Injectable()
export class experienciaService{
constructor(
    @InjectRepository(experienciaprofissional)
    private readonly experienciaprofissional: Repository<experienciaprofissional>


){}

async createUser(nome_empresa: string, cargo: string , inicio_trabalho:string , fim_trabalho:string , trabalho_atual:string): Promise<experienciaprofissional> {
    const user = new experienciaprofissional();
    user.nome_empresa = nome_empresa
    user.cargo = cargo
    user.inicio_trabalho = inicio_trabalho;
    user.fim_trabalho = fim_trabalho;
    user.trabalho_atual = trabalho_atual

    return await this.experienciaprofissional.save(user);
  }
}

