import {
  IsArray,
  IsDate,
  IsNotEmpty,
  IsNumber,
  ValidateNested,
  IsPositive,
  MaxLength,
  ArrayMinSize,
  IsUUID,
  IsOptional,
} from 'class-validator';
import { CaracteristicaProductDTO } from './CaracteristicaProduct.dto';
import { ImagemProductDTO } from './ImagemProduct.dto';
import { Type } from 'class-transformer';

export class UpdateProductDTO {
  @IsUUID(undefined, { message: 'ID de usuário inválido' })
  userId: string;

  @IsNotEmpty({ message: 'O nome do produto não pode ser vazio' })
  @IsOptional()
  nome: string;

  @Type(() => Number)
  @IsNumber(
    { maxDecimalPlaces: 2 },
    { message: 'O valor precisa ter no máximo duas casas decimais' },
  )
  @IsPositive({ message: 'O valor precisa ser um numero positivo' })
  @IsOptional()
  valor: number;

  @IsNumber(undefined, {
    message: 'A quantidade disponível precisa ser um valor numérico',
  })
  @IsPositive({
    message: 'A quantidade disponível precisa ser um número positivo',
  })
  @IsOptional()
  quantidadeDisponivel: number;

  @IsNotEmpty({ message: 'A descrição do produto não pode ser vazia' })
  @MaxLength(1000, {
    message: 'A descrição não pode ser maior que 1000 caracteres',
  })
  @IsOptional()
  descricao: string;

  @ValidateNested()
  @IsArray()
  @Type(() => CaracteristicaProductDTO)
  @ArrayMinSize(3, {
    message: 'O produto precisa ao menos ter 3 características',
  })
  @IsOptional()
  caracteristicas: CaracteristicaProductDTO[];

  @ValidateNested()
  @IsArray()
  @Type(() => ImagemProductDTO)
  @ArrayMinSize(1, { message: 'O produto precisa ao menos ter 1 imagem' })
  @IsOptional()
  imagens: ImagemProductDTO[];

  @IsNotEmpty({ message: 'A categoria não pode ser vazia' })
  @IsOptional()
  categoria: string;

  @Type(() => Date)
  @IsDate()
  @IsOptional()
  dataCriacao: Date;

  @Type(() => Date)
  @IsDate()
  @IsOptional()
  dataAtualizacao: Date;
}
