import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { username } from "../username/user.entity";
import { Repository } from "typeorm";



@Injectable()
export class authService{
@InjectRepository(username)
private readonly authService: Repository<username>

    async loginauth(login:username ){

        const {usuario , password } = login
        const user = await this.authService.findOne({where:{usuario,password}})

        if(!user){
            throw new Error('Invalid email or password');
        }

    }





}

