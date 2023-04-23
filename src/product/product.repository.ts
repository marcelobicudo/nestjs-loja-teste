import { Injectable } from '@nestjs/common';
import { ProductEntity } from './product.entity';

@Injectable()
export class ProductRepository {
  private products: ProductEntity[] = [];

  async save(product: ProductEntity) {
    this.products.push(product);
  }

  async list() {
    return this.products;
  }

  private searchById(id: string) {
    const verifyProduct = this.products.find(
      (savedProduct) => savedProduct.id === id,
    );

    if (!verifyProduct) {
      throw new Error('Produto não encontrado');
    }

    return verifyProduct;
  }

  async update(id: string, productData: Partial<ProductEntity>) {
    const product = this.searchById(id);

    Object.entries(productData).forEach(([key, value]) => {
      if (key === 'id' || key === 'userId') {
        return;
      }

      product[key] = value;
    });

    return product;
  }

  async delete(id: string) {
    const product = this.searchById(id);

    this.products = this.products.filter(
      (savedProduct) => savedProduct.id !== id,
    );

    return product;
  }
}
