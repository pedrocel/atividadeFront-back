import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { contatos } from "./contatos.entity";

@Injectable()
export class contatosService {
  constructor(
    @InjectRepository(contatos)
    private readonly contatosRepository: Repository<contatos>
  ) {}

  async createContato(data: contatos): Promise<contatos> {
    const novoContato = this.contatosRepository.create(data);
    return await this.contatosRepository.save(novoContato);
  }

  async getAllContatos(): Promise<contatos[]> {
    return await this.contatosRepository.find();
  }

  async getContatoById(id: number): Promise<contatos> {
    return await this.contatosRepository.findOne({where:{id}});
  }

  async updateContato(id: number, data: contatos): Promise<contatos> {
    const contatoExistente = await this.contatosRepository.findOne({where:{id}});
    if (!contatoExistente) {
      throw new Error("Contato não encontrado");
    }

    const contatoAtualizado = this.contatosRepository.merge(
      contatoExistente,
      data
    );
    return await this.contatosRepository.save(contatoAtualizado);
  }

  async deleteContato(id: number): Promise<void> {
    const contatoExistente = await this.contatosRepository.findOne({where:{id}});
    if (!contatoExistente) {
      throw new Error("Contato não encontrado");
    }

    await this.contatosRepository.remove(contatoExistente);
  }
}
