import Product from "#models/product";
import { ProductData } from "../types/ProductData.js";


class ProductService {
  public async listAll() {
    return await Product.all()
  }

  public async create(data: ProductData) {
    return await Product.create(data)
  }

  public async findById(id: number) {
    return await Product.findOrFail(id)
  }

  public async update(id: number, data: ProductData) {
    const product = await Product.findOrFail(id)
    product.merge(data)
    await product.save()
    return product
  }

  public async delete(id: number) {
    const product = await Product.findOrFail(id)
    await product.delete()
  }
}

export default new ProductService()
