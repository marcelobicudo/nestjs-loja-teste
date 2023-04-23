import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';

@Controller('/usuarios')
export class UsuarioController {
  private usuarioRepository = new UsuarioRepository();

  @Post()
  async criaUsuario(@Body() userData) {
    this.usuarioRepository.salvar(userData);
    return userData;
  }

  @Get()
  async listaUsuarios() {
    return this.usuarioRepository.listar();
  }
}
