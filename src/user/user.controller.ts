import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './dto/CreateUser.dto';
import { UserEntity } from './user.entity';
import { v4 as uuid } from 'uuid';
import { ListUserDTO } from './dto/ListUser.dto';

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
    return {
      user: new ListUserDTO(userEntity.id, userEntity.nome),
      message: 'Usuário criado com sucesso!',
    };
  }

  @Get()
  async listUsers() {
    const savedUsers = await this.userRepository.list();

    const usersList = savedUsers.map(
      (user) => new ListUserDTO(user.id, user.nome),
    );

    return usersList;
  }
}
