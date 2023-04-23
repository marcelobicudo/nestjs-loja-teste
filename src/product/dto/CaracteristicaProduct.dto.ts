import { IsNotEmpty, IsString } from 'class-validator';

export class CaracteristicaProductDTO {
  @IsNotEmpty({ message: 'Informe o nome da característica do produto' })
  nome: string;

  @IsString({ message: 'A descrição precisa ser do tipo textp' })
  descricao: string;
}
