import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { productModule } from './product/product.module';

@Module({
  imports: [UserModule, productModule],
})
export class AppModule {}
