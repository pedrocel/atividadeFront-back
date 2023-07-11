import { Body, Controller, Post } from "@nestjs/common";
import { userService } from "./userservice";


@Controller('')
export class UserController {
  constructor(private readonly userService: userService) {}

  @Post('/criarUser')
  async createUser(
    @Body('usuario') usuario: string,
    @Body('password') password: string,
    @Body('nome') nome: string,
    @Body('cpf') cpf: number,
  ) {
    const createdUser = await this.userService.createUser(usuario, password, nome, cpf);
    return { message: 'Usuario criado com sucesso', user: createdUser };
  }
}