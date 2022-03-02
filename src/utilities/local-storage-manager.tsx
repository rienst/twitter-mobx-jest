import { z } from 'zod'

export class LocalStorageManager<T> {
  key
  schema

  constructor(key: string, schema: z.Schema<T>) {
    this.key = key
    this.schema = schema
  }

  setValue(value: T) {
    localStorage.setItem(this.key, JSON.stringify(value))
  }

  getValue() {
    try {
      const raw = localStorage.getItem(this.key)

      if (!raw) {
        throw new Error()
      }

      const parsed = JSON.parse(raw, (key, value) =>
        typeof value === 'string' &&
        /^\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d.\d\d\dZ$/.test(value)
          ? new Date(value)
          : value
      )

      return this.schema.parse(parsed)
    } catch (error) {
      return
    }
  }
}
