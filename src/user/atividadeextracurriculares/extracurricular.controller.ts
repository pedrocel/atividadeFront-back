import { Controller, Get, Post, Put, Delete, Body, Param } from "@nestjs/common";
import { atividadeextracurriculares } from "./extracurricular.entity";
import { atividadeextracurricularesService } from "./extracurricular.service";

@Controller("atividadeextracurriculares")
export class atividadeextracurricularesController {
  constructor(private readonly atividadeextracurricularesService: atividadeextracurricularesService) {}

  @Post()
  async create(@Body() data: atividadeextracurriculares): Promise<atividadeextracurriculares> {
    return await this.atividadeextracurricularesService.createAtividadeextracurricular(data);
  }

  @Get()
  async findAll(): Promise<atividadeextracurriculares[]> {
    return await this.atividadeextracurricularesService.getAllAtividadeextracurriculares();
  }

  @Get(":id")
  async findOne(@Param("id") id: number): Promise<atividadeextracurriculares> {
    return await this.atividadeextracurricularesService.getAtividadeextracurricularById(id);
  }

  @Put(":id")
  async update(
    @Param("id") id: number,
    @Body() data: atividadeextracurriculares
  ): Promise<atividadeextracurriculares> {
    return await this.atividadeextracurricularesService.updateAtividadeextracurricular(id, data);
  }

  @Delete(":id")
  async delete(@Param("id") id: number): Promise<void> {
    await this.atividadeextracurricularesService.deleteAtividadeextracurricular(id);
  }
}
