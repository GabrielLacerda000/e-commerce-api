import vine from '@vinejs/vine'


export const createProductValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(6),
    description: vine.string().trim().escape(),
    price: vine.number(),
    stock: vine.number()
  })
)


export const updateProductValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(6),
    description: vine.string().trim().escape(),
    price: vine.number(),
    stock: vine.number()
  })
)
