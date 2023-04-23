import { IsEmail, MinLength, IsNotEmpty } from 'class-validator';
import { UniqueEmail } from '../validators/UniqueEmail.validator';

export class CreateUserDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  nome: string;

  @IsEmail(undefined, { message: 'O email informado é inválido' })
  @UniqueEmail({ message: 'Já existe um usuário com este email' })
  email: string;

  @MinLength(6, { message: 'A senha precisa ter ao menos 6 caracteres' })
  senha: string;
}
