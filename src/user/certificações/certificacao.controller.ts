import { Controller, Get, Post, Put, Delete, Body, Param } from "@nestjs/common";
import { certificacoes } from "./certificacao.entity";
import { certificacoesService } from "./certificacao.service";

@Controller("certificacoes")
export class certificacoesController {
  constructor(private readonly certificacoesService: certificacoesService) {}

  @Post()
  async create(@Body() data: certificacoes): Promise<certificacoes> {
    return await this.certificacoesService.createCertificacao(data);
  }

  @Get()
  async findAll(): Promise<certificacoes[]> {
    return await this.certificacoesService.getAllCertificacoes();
  }

  @Get(":id")
  async findOne(@Param("id") id: number): Promise<certificacoes> {
    return await this.certificacoesService.getCertificacaoById(id);
  }

  @Put(":id")
  async update(
    @Param("id") id: number,
    @Body() data: certificacoes
  ): Promise<certificacoes> {
    return await this.certificacoesService.updateCertificacao(id, data);
  }

  @Delete(":id")
  async delete(@Param("id") id: number): Promise<void> {
    await this.certificacoesService.deleteCertificacao(id);
  }
}
