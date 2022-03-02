import { makeAutoObservable } from 'mobx'
import { getUserNameFromLocalStorage } from 'utilities/local-storage'

export default class User {
  name

  constructor(name: string = 'Karen') {
    this.name = name

    this.initFromLocalStorage()

    makeAutoObservable(this)
  }

  initFromLocalStorage() {
    const name = getUserNameFromLocalStorage()

    if (!name) {
      return
    }

    this.name = name
  }

  setName(name: string) {
    this.name = name
  }
}
