// class Student {
//     fName = "Dehan Kadushana"
//     age = 24
//     address = "Pahalagama,Thambuttegama"
//        print() {
//         console.log("Hello ",this.fName )
//       }
// }

// let Kasun = new Student();

// Kasun.fName = "Kasun maduranga"

// console.log(Kasun);
// Kasun.print();



class Students {
    fNama
    age
    address
    constructor(fName,age,address) {
        this.fNama = fName;
        this.age = age;
        this.address = address;
    }

    hello(){
        console.log("Hello ",this.fNama)
    }
}

let anjana = new Students("Anjana Indrajith",23,"Kudabilibawa Thambuttegama");
let kasun = new Students("Kasun Maduranga",30,"Kudabilibawa Thambuttegama");
let sampath = new Students("Sampath bandara",29,"Kudabilibawa Thambuttegama");

console.log(anjana.hello())

console.log(anjana)
console.log(kasun)
console.log(sampath)

