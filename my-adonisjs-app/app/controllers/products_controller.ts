import productService from '#services/productService'
import type { HttpContext } from '@adonisjs/core/http'
import { createProductValidator, updateProductValidator } from '#validators/product'

export default class ProductsController {
  public async index({}: HttpContext) {
    return productService.listAll()
  }

  public async store({ request }: HttpContext) {
    const validatedData = await request.validateUsing(createProductValidator)
    const product = await productService.create(validatedData)

    return  {
      message: 'Product created',
      product: product
    }
  }

  public async show({ params }: HttpContext) {
    return productService.findById(params.id)
  }

  public async update({ params, request }: HttpContext) {
      const validatedData = await request.validateUsing(updateProductValidator)
      const product = await productService.update(params.id, validatedData)

      return  {
        message: 'Product updated',
        product: product
      }
  }

  public async destroy({ params }: HttpContext) {
    const productDeleted =  await productService.delete(params.id)

    if(productDeleted) {
      return {
        message: 'Product deleted'
      }
    } else {
      return {
        message: 'Error while deleting product'
      }
    }
  }
}
