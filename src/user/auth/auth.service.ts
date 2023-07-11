import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { username } from "../username/user.entity";
import { Repository } from "typeorm";
import * as jwt from 'jsonwebtoken';



@Injectable()
export class authService{
@InjectRepository(username)
private readonly authService: Repository<username>

    async loginauth(login:username ){

        const {usuario , password } = login
        const user = await this.authService.findOne({where:{usuario,password}})

        if (!user || user.password !== password) {
            throw new Error('Invalid email or password');
          }
      
          const token = this.generateToken(user.id);
      
          return { message: 'Login successful', token };
        }
      
        private generateToken(userId: number) {
          const payload = { userId };
          const secretKey = 'your-secret-key'; // Defina sua chave secreta aqui
          const expiresIn = '1h'; // Defina o tempo de expiração do token aqui
      
          return jwt.sign(payload, secretKey, { expiresIn });
        }
      
        async getUsers(token: string) {
          const userId = this.getUserIdFromToken(token);
          const users = await this.authService.find()
      
          return users;
        }
      
        private getUserIdFromToken(token: string) {
          const secretKey = 'your-secret-key'; // Defina sua chave secreta aqui
      
          try {
            const decodedToken = jwt.verify(token, secretKey) as { userId: number };
            return decodedToken.userId;
          } catch (error) {
            throw new Error('Invalid token');
          }
        }
      }







