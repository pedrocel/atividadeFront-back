import { Injectable } from "@nestjs/common";
import { InjectEntityManager, InjectRepository } from "@nestjs/typeorm";
import { atividadeextracurriculares } from "src/user/atividadeextracurriculares/extracurricular.entity";
import { certificacoes } from "src/user/certificações/certificacao.entity";
import { escolaridade } from "src/user/escolaridade/escolaridade.entity";
import { experienciaprofissional } from "src/user/experienciaprofissional/experiencia.entity";
import { Repository } from "typeorm";

@Injectable()
export class DashboardService {
  constructor(
    @InjectRepository(atividadeextracurriculares)
    private readonly atividadeextracurricularesRepository: Repository<atividadeextracurriculares>,
    @InjectRepository(certificacoes)
    private readonly certificacoesRepository: Repository<certificacoes>,
    @InjectRepository(escolaridade)
    private readonly escolaridadeRepository: Repository<escolaridade>,
    @InjectRepository(experienciaprofissional)
    private readonly experienciaProfissionalRepository: Repository<experienciaprofissional>,
  ) {}

    async getAll(){
      
        const atividades = await this.atividadeextracurricularesRepository.find()

        const certificados = await this.certificacoesRepository.find();

        const escolaridade = await this.escolaridadeRepository.find();

        const experiencia = await this.experienciaProfissionalRepository.find();

        const data = {
            "certificados": certificados,
            "atividades": atividades,
            "escolaridade": escolaridade,
            "experiencia": experiencia
        }

        return data;
    }
}