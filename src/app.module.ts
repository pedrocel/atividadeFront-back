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
import { experienciaController } from './user/experienciaprofissional/experiencia.controller';
import { escolaridadeController } from './user/escolaridade/service.controller';
import { contatosController } from './user/contatos/contato.controller';
import { certificacoesController } from './user/certificações/certificacao.controller';
import { atividadeextracurricularesController } from './user/atividadeextracurriculares/extracurricular.controller';
import { experienciaService } from './user/experienciaprofissional/experiencia.service';
import { escolaridadeService } from './user/escolaridade/escolaridade.service';
import { contatosService } from './user/contatos/contato.service';
import { certificacoesService } from './user/certificações/certificacao.service';
import { atividadeextracurricularesService } from './user/atividadeextracurriculares/extracurricular.service';
import { DashboardController } from './dashboard/dashboard.controller';
import { DashboardService } from './dashboard/dashboard.service';

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
  
  controllers: [DashboardController ,AppController,UserController,AuthController,UserController,experienciaController,escolaridadeController,contatosController,certificacoesController,atividadeextracurricularesController],
  providers: [DashboardService ,AppService , userService, authService,experienciaService,escolaridadeService,contatosService,certificacoesService,atividadeextracurricularesService],
})
export class AppModule {}
