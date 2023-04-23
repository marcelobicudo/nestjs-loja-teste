import { IsEmail, MinLength, IsNotEmpty } from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  nome: string;

  @IsEmail(undefined, { message: 'O email informado é inválido' })
  email: string;

  @MinLength(6, { message: 'A senha precisa ter ao menos 6 caracteres' })
  senha: string;
}
