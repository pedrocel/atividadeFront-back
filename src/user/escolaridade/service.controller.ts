import { Controller, Get, Post, Put, Delete, Body, Param } from "@nestjs/common";
import { escolaridade } from "./escolaridade.entity";
import { escolaridadeService } from "./escolaridade.service";

@Controller("escolaridade")
export class escolaridadeController {
  constructor(private readonly escolaridadeService: escolaridadeService) {}

  @Post()
  async create(@Body() data: escolaridade): Promise<escolaridade> {
    return await this.escolaridadeService.createEscolaridade(data);
  }

  @Get()
  async findAll(): Promise<escolaridade[]> {
    return await this.escolaridadeService.getAllEscolaridades();
  }

  @Get(":id")
  async findOne(@Param("id") id: number): Promise<escolaridade> {
    return await this.escolaridadeService.getEscolaridadeById(id);
  }

  @Put(":id")
  async update(
    @Param("id") id: number,
    @Body() data: escolaridade
  ): Promise<escolaridade> {
    return await this.escolaridadeService.updateEscolaridade(id, data);
  }

  @Delete(":id")
  async delete(@Param("id") id: number): Promise<void> {
    await this.escolaridadeService.deleteEscolaridade(id);
  }
}
