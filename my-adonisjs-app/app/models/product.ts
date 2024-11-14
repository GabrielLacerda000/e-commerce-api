import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public price: number

  public get priceAsNumber() {
    return typeof this.price === 'string' ? parseFloat(this.price) : this.price
  }

  @column()
  public stock: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
