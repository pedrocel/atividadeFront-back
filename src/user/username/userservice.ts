import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { username } from "./user.entity";

@ApiTags("User")
@Injectable()
export class userService {
  constructor(
    @InjectRepository(username)
    private readonly userService: Repository<username>
  ) {}

  @ApiOperation({ summary: "Criar um novo usuario" })
  @ApiResponse({ status: 201, description: "usuario criado com sucesso", type: username })
  async createUser(
    usuario: string,
    password: string,
    nome: string,
    cpf: number
  ): Promise<username> {
    const user = new username();
    user.usuario = usuario;
    user.password = password;
    user.cpf = cpf;
    user.nome = nome;
    return await this.userService.save(user);
  }
}
