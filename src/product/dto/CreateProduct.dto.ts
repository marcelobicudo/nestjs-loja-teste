import {
  IsArray,
  IsDate,
  IsNotEmpty,
  IsNumber,
  ValidateNested,
  IsPositive,
  MaxLength,
  ArrayMinSize,
} from 'class-validator';
import { CaracteristicaProductDTO } from './CaracteristicaProduct.dto';
import { ImagemProductDTO } from './ImagemProduct.dto';
import { Type } from 'class-transformer';

export class CreateProductDTO {
  @IsNotEmpty({ message: 'O nome do produto não pode ser vazio' })
  nome: string;

  @Type(() => Number)
  @IsNumber(
    { maxDecimalPlaces: 2 },
    { message: 'O valor precisa ter no máximo duas casas decimais' },
  )
  @IsPositive({ message: 'O valor precisa ser um numero positivo' })
  valor: number;

  @IsNumber(undefined, {
    message: 'A quantidade disponível precisa ser um valor numérico',
  })
  @IsPositive({
    message: 'A quantidade disponível precisa ser um número positivo',
  })
  quantidadeDisponivel: number;

  @IsNotEmpty({ message: 'A descrição do produto não pode ser vazia' })
  @MaxLength(1000, {
    message: 'A descrição não pode ser maior que 1000 caracteres',
  })
  descricao: string;

  @ValidateNested()
  @IsArray()
  @Type(() => CaracteristicaProductDTO)
  @ArrayMinSize(3, {
    message: 'O produto precisa ao menos ter 3 características',
  })
  caracteristicas: CaracteristicaProductDTO[];

  @ValidateNested()
  @IsArray()
  @Type(() => ImagemProductDTO)
  @ArrayMinSize(1, { message: 'O produto precisa ao menos ter 1 imagem' })
  imagens: ImagemProductDTO[];

  @IsNotEmpty({ message: 'A categoria não pode ser vazia' })
  categoria: string;

  @Type(() => Date)
  @IsDate()
  dataCriacao: Date;

  @Type(() => Date)
  @IsDate()
  dataAtualizacao: Date;
}
