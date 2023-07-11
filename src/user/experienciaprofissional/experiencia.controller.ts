import { Body, Controller, Post, Get, Param, Put, Delete } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from "@nestjs/swagger";
import { experienciaService } from "./experiencia.service";
import { experienciaprofissional } from "./experiencia.entity";

@ApiTags("Experiencia Profissional")
@Controller("experiencia")
export class experienciaController {
  constructor(private readonly experienciaService: experienciaService) {}

  @ApiOperation({ summary: "CRIAR EXPERIENCIA PROFISSIONAL" })
  @ApiResponse({ status: 201, description: "EXPERIENCIA PROFISSIONAL CRIADA COM SUCESSO", type: experienciaprofissional })
  @Post()
  async createUser(@Body() data: experienciaprofissional): Promise<experienciaprofissional> {
    return this.experienciaService.createUser(data.nome_empresa, data.cargo, data.inicio_trabalho, data.fim_trabalho, data.trabalho_atual);
  }

  @ApiOperation({ summary: "LISTAR TODAS EXPERIENCIAS PROFISSIONAIS" })
  @ApiResponse({ status: 200, description: "RETORNAR TODAS AS EXPERIENCIAS PROFISSIONAIS", type: [experienciaprofissional] })
  @Get()
  async getAllUsers(): Promise<experienciaprofissional[]> {
    return this.experienciaService.getAllUsers();
  }

  @ApiOperation({ summary: "EXPERIENCIA PROFISSIONAL SELECIONADA POR ID" })
  @ApiParam({ name: "id", description: "ID da experiência profissional", type: Number })
  @ApiResponse({ status: 200, description: "RETORNAR EXPERIENCIA PROFISSIONAL PELO ID", type: experienciaprofissional })
  @Get(":id")
  async getUserById(@Param("id") id: number): Promise<experienciaprofissional> {
    return this.experienciaService.getUserById(id);
  }

  @ApiOperation({ summary: "ATUALIZAR EXPERIENCIA PROFISSIONAL" })
  @ApiParam({ name: "id", description: "ID da experiência profissional", type: Number })
  @ApiResponse({ status: 200, description: "EXPERIENCIA PROFISSIONAL ATUALIZADA COM SUCESSO", type: experienciaprofissional })
  @Put(":id")
  async updateUser(@Param("id") id: number, @Body() data: experienciaprofissional): Promise<experienciaprofissional> {
    return this.experienciaService.updateUser(id, data.nome_empresa, data.cargo, data.inicio_trabalho, data.fim_trabalho, data.trabalho_atual);
  }

  @ApiOperation({ summary: "EXPERIENCIA PROFISSIONAL PARA DELETAR" })
  @ApiParam({ name: "id", description: "ID da experiência profissional", type: Number })
  @ApiResponse({ status: 204, description: "EXPERIENCIA PROFISSIONAL DELETADA" })
  @Delete(":id")
  async deleteUser(@Param("id") id: number): Promise<void> {
    await this.experienciaService.deleteUser(id);
  }
}
