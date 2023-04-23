import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './dto/CreateUser.dto';
import { UserEntity } from './user.entity';
import { v4 as uuid } from 'uuid';

@Controller('/users')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() userData: CreateUserDTO) {
    const userEntity = new UserEntity();
    userEntity.nome = userData.nome;
    userEntity.email = userData.email;
    userEntity.senha = userData.senha;
    userEntity.id = uuid();

    this.userRepository.save(userEntity);
    return { id: userEntity.id, message: 'Usuário criado com sucesso!' };
  }

  @Get()
  async listUsers() {
    return this.userRepository.list();
  }
}
