import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { escolaridade } from "./escolaridade.entity";

@Injectable()
export class escolaridadeService {
  constructor(
    @InjectRepository(escolaridade)
    private readonly escolaridadeRepository: Repository<escolaridade>
  ) {}

  async createEscolaridade(data: escolaridade): Promise<escolaridade> {
    const novaEscolaridade = this.escolaridadeRepository.create(data);
    return await this.escolaridadeRepository.save(novaEscolaridade);
  }

  async getAllEscolaridades(): Promise<escolaridade[]> {
    return await this.escolaridadeRepository.find();
  }

  async getEscolaridadeById(id: number): Promise<escolaridade> {
    return await this.escolaridadeRepository.findOne({ where: { id } });
  }

  async updateEscolaridade(
    id: number,
    data: escolaridade
  ): Promise<escolaridade> {
    const escolaridadeExistente = await this.escolaridadeRepository.findOne({ where: { id } });
    if (!escolaridadeExistente) {
      throw new Error("Escolaridade não encontrada");
    }

    const escolaridadeAtualizada = this.escolaridadeRepository.merge(
      escolaridadeExistente,
      data
    );
    return await this.escolaridadeRepository.save(escolaridadeAtualizada);
  }

  async deleteEscolaridade(id: number): Promise<void> {
    const escolaridadeExistente = await this.escolaridadeRepository.findOne({ where: { id } });
    if (!escolaridadeExistente) {
      throw new Error("Escolaridade não encontrada");
    }

    await this.escolaridadeRepository.remove(escolaridadeExistente);
  }
}
