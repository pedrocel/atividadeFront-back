import { Injectable } from "@nestjs/common";
import { username } from "./user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class userService{
constructor(
    @InjectRepository(username)
    private readonly userService: Repository<username>


){}

async createUser(usuario: string, password: string , nome:string , cpf:number): Promise<username> {
    const user = new username();
    user.usuario = usuario;
    user.password = password;
    user.cpf = cpf;
    user.nome = nome;
    return await this.userService.save(user);
  }
}


