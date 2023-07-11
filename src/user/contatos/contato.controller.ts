import { Controller, Get, Post, Put, Delete, Body, Param } from "@nestjs/common";
import { contatos } from "./contatos.entity";
import { contatosService } from "./contato.service";

@Controller("contatos")
export class contatosController {
  constructor(private readonly contatosService: contatosService) {}

  @Post()
  async create(@Body() data: contatos): Promise<contatos> {
    return await this.contatosService.createContato(data);
  }

  @Get()
  async findAll(): Promise<contatos[]> {
    return await this.contatosService.getAllContatos();
  }

  @Get(":id")
  async findOne(@Param("id") id: number): Promise<contatos> {
    return await this.contatosService.getContatoById(id);
  }

  @Put(":id")
  async update(
    @Param("id") id: number,
    @Body() data: contatos
  ): Promise<contatos> {
    return await this.contatosService.updateContato(id, data);
  }

  @Delete(":id")
  async delete(@Param("id") id: number): Promise<void> {
    await this.contatosService.deleteContato(id);
  }
}
