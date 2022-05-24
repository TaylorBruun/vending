import { ProxyState } from "../AppState.js"
import { snacksService } from "../Services/SnacksService.js"

function _drawCurrency(){
    document.getElementById('current').innerText = 'Total: $' + ProxyState.currCurrency.toFixed(2).toString()
}

function _drawVendables(){
    let template = ''
    ProxyState.snacks.forEach(s => {
        template += s.Template
    });
    document.getElementById('vendables').innerHTML = template
}

function _drawInventory(){
    let template = '<h5>Inventory:</h5>'
    ProxyState.purchasedSnacks.forEach(s => {
        template +=
        `<img class="img-fluid p-1 inventory-snack" src="/assets/img/${s.name}.jpg" alt="">`
    });
    document.getElementById('inventory').innerHTML = template
}


export class SnacksController{
    constructor(){
        console.log('controller on')
        ProxyState.on('currCurrency', _drawCurrency)
        _drawInventory()
        _drawVendables()
    }

    buySnack(snackIndex){
        console.log('buying snack (controller)', snackIndex);
        snacksService.buySnack(snackIndex)
        _drawInventory()
    }



    addCurrency(){
        console.log('adding currency (controller)')
        snacksService.addCurrency()
        _drawCurrency()
    }
}