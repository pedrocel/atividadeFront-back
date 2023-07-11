import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { experienciaprofissional } from "./experiencia.entity";

@Injectable()
export class experienciaService {
  constructor(
    @InjectRepository(experienciaprofissional)
    private readonly experienciaRepository: Repository<experienciaprofissional>
  ) {}

  async createUser(
    nome_empresa: string,
    cargo: string,
    inicio_trabalho: string,
    fim_trabalho: string,
    trabalho_atual: string
  ): Promise<experienciaprofissional> {
    const experience = new experienciaprofissional();
    experience.nome_empresa = nome_empresa;
    experience.cargo = cargo;
    experience.inicio_trabalho = inicio_trabalho;
    experience.fim_trabalho = fim_trabalho;
    experience.trabalho_atual = trabalho_atual;

    return await this.experienciaRepository.save(experience);
  }

  async getAllUsers(): Promise<experienciaprofissional[]> {
    return await this.experienciaRepository.find();
  }

  async getUserById(id: number): Promise<experienciaprofissional> {
    return await this.experienciaRepository.findOne({where:{id}});
  }

  async updateUser(
    id: number,
    nome_empresa: string,
    cargo: string,
    inicio_trabalho: string,
    fim_trabalho: string,
    trabalho_atual: string
  ): Promise<experienciaprofissional> {
    const experience = await this.experienciaRepository.findOne({where:{id}});
    if (!experience) {
      throw new Error("Experiencia profissional não encontrada");
    }

    experience.nome_empresa = nome_empresa;
    experience.cargo = cargo;
    experience.inicio_trabalho = inicio_trabalho;
    experience.fim_trabalho = fim_trabalho;
    experience.trabalho_atual = trabalho_atual;

    return await this.experienciaRepository.save(experience);
  }

  async deleteUser(id: number): Promise<void> {
    const experience = await this.experienciaRepository.findOne({where:{id}});
    if (!experience) {
      throw new Error("Experiencia profissional não encontrada");
    }

    await this.experienciaRepository.remove(experience);
  }
}
