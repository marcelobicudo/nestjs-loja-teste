import { IsEmail, MinLength, IsNotEmpty, IsOptional } from 'class-validator';
import { UniqueEmail } from '../validators/UniqueEmail.validator';

export class UpdateUserDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  @IsOptional()
  nome: string;

  @IsEmail(undefined, { message: 'O email informado é inválido' })
  @UniqueEmail({ message: 'Já existe um usuário com este email' })
  @IsOptional()
  email: string;

  @MinLength(6, { message: 'A senha precisa ter ao menos 6 caracteres' })
  @IsOptional()
  senha: string;
}
