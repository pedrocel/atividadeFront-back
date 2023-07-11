import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { userService } from "./userservice";

@ApiTags("User")
@Controller("users")
export class UserController {
  constructor(private readonly userService: userService) {}

  @ApiOperation({ summary: "Criar novo usuario" })
  @ApiResponse({ status: 201, description: "usuario criado com sucesso" })
  @Post("/create")
  async createUser(
    @Body("usuario") usuario: string,
    @Body("password") password: string,
    @Body("nome") nome: string,
    @Body("cpf") cpf: number
  ) {
    const createdUser = await this.userService.createUser(usuario, password, nome, cpf);
    return { message: "User created successfully", user: createdUser };
  }
}


