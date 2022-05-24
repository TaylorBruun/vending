import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { Snack } from "./Models/Snack.js"



class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  
  
  currCurrency = 0
   
   snacks = [
    new Snack(0, 'Pineapple', 2.75, './assets/img/pineapple.jpg'),
    new Snack(1, 'Banana', .75, './assets/img/banana.jpg', 'Single Banana'),
    new Snack(2, 'Lemon', 1.00, './assets/img/lemon.jpg'),
    new Snack(3, 'Bananas', 2.00, './assets/img/bananas.jpg', 'Bunch of Bananas with one Missing')
  ]
purchasedSnacks = []

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
