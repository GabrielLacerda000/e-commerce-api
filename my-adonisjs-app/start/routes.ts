/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import ProductsController from '#controllers/products_controller'
import router from '@adonisjs/core/services/router'

router.group(() => {
  router.get('/', [ProductsController, 'index'])
  router.post('products', [ProductsController, 'store'])
  router.get('products/:id', [ProductsController, 'show'])
  router.put('products/:id', [ProductsController, 'update'])
  router.delete('products/:id', [ProductsController, 'destroy'])
}).prefix('api')
