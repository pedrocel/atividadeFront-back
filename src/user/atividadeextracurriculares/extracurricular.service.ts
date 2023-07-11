import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { atividadeextracurriculares } from "./extracurricular.entity";

@Injectable()
export class atividadeextracurricularesService {
  constructor(
    @InjectRepository(atividadeextracurriculares)
    private readonly atividadeextracurricularesRepository: Repository<atividadeextracurriculares>
  ) {}

  async createAtividadeextracurricular(data: atividadeextracurriculares): Promise<atividadeextracurriculares> {
    const novaAtividadeextracurricular = this.atividadeextracurricularesRepository.create(data);
    return await this.atividadeextracurricularesRepository.save(novaAtividadeextracurricular);
  }

  async getAllAtividadeextracurriculares(): Promise<atividadeextracurriculares[]> {
    return await this.atividadeextracurricularesRepository.find();
  }

  async getAtividadeextracurricularById(id: number): Promise<atividadeextracurriculares> {
    return await this.atividadeextracurricularesRepository.findOne(({where:{id}}));
  }

  async updateAtividadeextracurricular(
    id: number,
    data: atividadeextracurriculares
  ): Promise<atividadeextracurriculares> {
    const atividadeextracurricularExistente = await this.atividadeextracurricularesRepository.findOne({where:{id}});
    if (!atividadeextracurricularExistente) {
      throw new Error("Atividade extracurricular não encontrada");
    }

    const atividadeextracurricularAtualizada = this.atividadeextracurricularesRepository.merge(
      atividadeextracurricularExistente,
      data
    );
    return await this.atividadeextracurricularesRepository.save(atividadeextracurricularAtualizada);
  }

  async deleteAtividadeextracurricular(id: number): Promise<void> {
    const atividadeextracurricularExistente = await this.atividadeextracurricularesRepository.findOne(({where:{id}}));
    if (!atividadeextracurricularExistente) {
      throw new Error("Atividade extracurricular não encontrada");
    }

    await this.atividadeextracurricularesRepository.remove(atividadeextracurricularExistente);
  }
}
