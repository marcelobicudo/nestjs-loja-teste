import { IsNotEmpty, IsString } from 'class-validator';

export class ImagemProductDTO {
  @IsNotEmpty({ message: 'A url da imagem do produto é obrigatória' })
  url: string;

  @IsString({
    message: 'A descrição da imagem do produto precisa ser do tipo texto',
  })
  descricao: string;
}
