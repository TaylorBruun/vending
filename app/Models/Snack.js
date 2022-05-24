
export class Snack{
    constructor (id, name, price, img, flavorText){
        this.id = id //make this the same as array position
        this.name = name
        this.price = price
        this.img = img
        this.flavorText = flavorText

    }

    get Template(){
        return`
       <div class="col-3">
            <img onclick="app.snacksController.buySnack(${this.id})" class="img-fluid vendable-snack" src="/assets/img/${this.name}.jpg" alt="">
            <h6>${this.Flavor} - ${this.price.toFixed(2)}</h6>

        </div>`
    }

    get Flavor(){
        if(this.flavorText){
            return this.flavorText
        }
        else{
            return this.name

        }

    }

// check to see if there is flavortext
// if yes, use that in the last injection above
// if no, use the name


}