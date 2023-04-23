import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { CreateProductDTO } from './dto/CreateProduct.dto';
import { ProductEntity } from './product.entity';
import { v4 as uuid } from 'uuid';
import { UpdateProductDTO } from './dto/UpdateProduct.dto';
import { ListProductDTO } from './dto/ListProduct.dto';

@Controller('/products')
export class ProductController {
  constructor(private productRepository: ProductRepository) {}

  @Post()
  async createProduct(@Body() productData: CreateProductDTO) {
    const productEntity = new ProductEntity();
    productEntity.id = uuid();
    productEntity.nome = productData.nome;
    productEntity.valor = productData.valor;
    productEntity.quantidadeDisponivel = productData.quantidadeDisponivel;
    productEntity.descricao = productData.descricao;
    productEntity.caracteristicas = productData.caracteristicas;
    productEntity.imagens = productData.imagens;
    productEntity.categoria = productData.categoria;
    productEntity.dataCriacao = productData.dataCriacao;
    productEntity.dataAtualizacao = productData.dataAtualizacao;

    this.productRepository.save(productEntity);
    return {
      product: new ListProductDTO(productEntity.id, productEntity.nome),
      message: 'Produto criado com sucesso!',
    };
  }

  @Get()
  async listProducts() {
    const savedProducts = await this.productRepository.list();

    const productsList = savedProducts.map(
      (product) => new ListProductDTO(product.id, product.nome),
    );

    return productsList;
  }

  @Put('/:id')
  async updateProduct(
    @Param('id') id: string,
    @Body() productData: UpdateProductDTO,
  ) {
    const updatedProduct = await this.productRepository.update(id, productData);

    return {
      product: new ListProductDTO(updatedProduct.id, updatedProduct.nome),
      message: 'Produto atualizado com sucesso',
    };
  }

  @Delete('/:id')
  async deleteProduct(@Param('id') id: string) {
    const removedProduct = await this.productRepository.delete(id);

    return {
      product: new ListProductDTO(removedProduct.id, removedProduct.nome),
      message: 'Usuário removido com sucesso',
    };
  }
}
