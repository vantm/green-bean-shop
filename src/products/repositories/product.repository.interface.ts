import Product from './entities/product.entity';
import IRepository from '../../common/repository';

export default interface IProductRepository extends IRepository<Product> {
  disable(productId: string): void;
  enable(productId: string): void;
}
