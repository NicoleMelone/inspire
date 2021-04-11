import Image from "./Models/Image.js"
import Quote from "./Models/Quote.js"
import Todo from "./Models/Todo.js"
// import Clock from "./Models/Clock.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"


class AppState extends EventEmitter {
  /** @type{Image} */
  images = null

  /** @type{Quote} */
  quotes = null

  /** @type{Todo} */
  todos = []

  /** @type{Weather} */
  weathers = null

  // /** @type{Clock} */
  // time = null
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
