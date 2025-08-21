class Vehicle {
    brand = "Civic"
    price = 0
    

    info = () => { 
        console.log(` This is ${this.brand} is Rs.${this.price}`)
     }
}

let civic = new Vehicle

civic.info()
console.log(civic);