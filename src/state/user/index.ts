import { makeAutoObservable } from 'mobx'
import { NameLocalStorageManager } from 'utilities/local-storage'

export default class User {
  name

  constructor(name: string = 'Karen') {
    this.name = name

    this.initFromLocalStorage()

    makeAutoObservable(this)
  }

  initFromLocalStorage() {
    const name = NameLocalStorageManager.getValue()

    if (!name) {
      return
    }

    this.name = name
  }

  setName(name: string) {
    this.name = name
  }
}
