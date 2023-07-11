import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { certificacoes } from "./certificacao.entity";

@Injectable()
export class certificacoesService {
  constructor(
    @InjectRepository(certificacoes)
    private readonly certificacoesRepository: Repository<certificacoes>
  ) {}

  async createCertificacao(data: certificacoes): Promise<certificacoes> {
    const novaCertificacao = this.certificacoesRepository.create(data);
    return await this.certificacoesRepository.save(novaCertificacao);
  }

  async getAllCertificacoes(): Promise<certificacoes[]> {
    return await this.certificacoesRepository.find();
  }

  async getCertificacaoById(id: number): Promise<certificacoes> {
    return await this.certificacoesRepository.findOne({where:{id}});
  }

  async updateCertificacao(
    id: number,
    data: certificacoes
  ): Promise<certificacoes> {
    const certificacaoExistente = await this.certificacoesRepository.findOne({where:{id}});
    if (!certificacaoExistente) {
      throw new Error("Certificação não encontrada");
    }

    const certificacaoAtualizada = this.certificacoesRepository.merge(
      certificacaoExistente,
      data
    );
    return await this.certificacoesRepository.save(certificacaoAtualizada);
  }

  async deleteCertificacao(id: number): Promise<void> {
    const certificacaoExistente = await this.certificacoesRepository.findOne({where:{id}});
    if (!certificacaoExistente) {
      throw new Error("Certificação não encontrada");
    }

    await this.certificacoesRepository.remove(certificacaoExistente);
  }
}
