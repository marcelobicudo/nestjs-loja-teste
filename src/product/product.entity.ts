import { CaracteristicaProductDTO } from './dto/CaracteristicaProduct.dto';
import { ImagemProductDTO } from './dto/ImagemProduct.dto';

export class ProductEntity {
  id: string;
  nome: string;
  valor: number;
  quantidadeDisponivel: number;
  descricao: string;
  caracteristicas: CaracteristicaProductDTO[];
  imagens: ImagemProductDTO[];
  categoria: string;
  dataCriacao: Date;
  dataAtualizacao: Date;
}
