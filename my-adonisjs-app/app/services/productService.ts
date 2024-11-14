import Product from "#models/product";
import { ProductData } from "../types/ProductData.js";
class ProductService {
  public async listAll() {
    const products = await Product.all()
    const formattedProducts = products.map((product) => ({
      ...product.toJSON(),
      price: product.priceAsNumber
    }))
    return formattedProducts
  }

  public async create(data: ProductData) {
    return await Product.create(data)
  }

  public async findById(id: number) {
   const product = await Product.findOrFail(id)
   return {
    ...product.toJSON(),
    price: product.priceAsNumber
   }

  }

  public async update(id: number, data: ProductData) {
    const product = await Product.findOrFail(id)
    product.merge(data)
    await product.save()
    return product
  }

  public async delete(id: number) {
    const product = await Product.find(id);
    if (product) {
      await product.delete();
      return true;
    }
    return false;
  }
}

export default new ProductService()
