import { ProxyState } from "../AppState.js"
import { Pop } from "../Utils/Pop.js";



class SnacksService{
    

    addCurrency(){
        ProxyState.currCurrency += .25
        console.log('adding currency (service)');
    }


    buySnack(snackIndex){
        console.log(ProxyState.snacks[snackIndex].price);
        if(ProxyState.currCurrency >= ProxyState.snacks[snackIndex].price){
        console.log('buying snack (Service)', snackIndex);
        ProxyState.currCurrency -= ProxyState.snacks[snackIndex].price
        ProxyState.purchasedSnacks.push(ProxyState.snacks[snackIndex])
        console.log('pushing', ProxyState.snacks[snackIndex]);
        }
        else{
            Pop.toast("Insufficient Funds", "error", 'top', 5000,)
        }
    }
}




export const snacksService = new SnacksService