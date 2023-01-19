//declaracion de variables
//let var const
//const genera una constante
// var y let generan una variable
//$scope = fragmento de codigo {}

function suma() {
    const numero = 2;
    let numero2 = 4;
    //var no es o no tiene de tipo $scope solo se puede declarar en una sola funcion y en un solo archivo
    var numero3 = 5;
    //$scope primero
    function sumaSegunda() {
        const numero = 3;
        let numero2 = 4;
         //var no es de tipo o no tiene $scope solo se puede declarar en una sola funcion y en un solo archivo 
        var numero3 = 5;
        //$scope segundo
    }
}

//formas de hacer funciones
function suma(numero1, numero2) {
    return numero1+numero2
}

const suma = function(numero1, numero2){
return numero1+numero2
}

//arrow function
//return implicito
const suma = (numero1,numero2) => numero1+numero2

//template string
const name = "cristian"
const surname = "campos"
const lastname = "roman"
const fullname = name + " " +  surname + " " + lastname
const fullname2 = `${name} ${surname} ${lastname}`

const person = {
    name:"",
    surname:"",
    lastname: null
}
//arrow function autoejecutable
(() =>{
    const name = person.name.toString();
    //forma evitar el uso de toString()
    //validacion de null con template
    const name2 = `${person.name} ${person.lastname ? person.lastname : ''}`
})()

//declaracion de arreglos
//array
const roles = [1,2,3,{name:"", surname: ""}]//se puede pero no esta bien se necesitan muchas validaciones
//arrayList
const roles2 = [
    {
        key: 'ADMIN',
        name: 'Super administrador'
    },
    {
        key:'USER',
        name:'Usuario'
    }
]
//list
const roles3 = {}

//prototypes son como los metodos de la clase string
//push, splice, indexOf, find, filter, map, foreach

//este es el perron
//prototype
roles2.forEach((element,index) =>{
    console.log(element.name);
})
//jala pero esta feo
//metodo iterativo
for (let i = 0; i < roles.length; i++) {
    console.log(roles2[i].name);
    
}

while (condition) {
    
}

do {
    
} while (condition);

//desestructuracion de objetos
const person2 = {
    name: "",
    age: "",
    address: {
        street:"Barona",
        number: 29,
    }
}
//manera tipica de acceder a un obj
console.log(person2.name);
console.log(person2.address.street);

//destructuracion
(() =>{
    const {name, address: {street}} = person2
    console.log(street);
})
