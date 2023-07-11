import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { experienciaprofissional } from './user/experienciaprofissional/experiencia.entity';
import { escolaridade } from './user/escolaridade/escolaridade.entity';
import { contatos } from './user/contatos/contatos.entity';
import { certificacoes } from './user/certificações/certificacao.entity';
import { atividadeextracurriculares } from './user/atividadeextracurriculares/extracurricular.entity';
import { username } from './user/username/user.entity';
import { UserController } from './user/username/usercontroller';
import { userService } from './user/username/userservice';
import { authService } from './user/auth/auth.service';
import { AuthController } from './user/auth/authcontroller';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    database: 'sistema',
    autoLoadEntities:true,
    synchronize: true,
  }),TypeOrmModule.forFeature([experienciaprofissional,escolaridade,contatos,certificacoes,atividadeextracurriculares,username])],
  
  controllers: [AppController,UserController,AuthController],
  providers: [AppService , userService, authService],
})
export class AppModule {}
