import { Suma } from "./suma";
import { Multiplicacion } from "./multiplicacion";
import { Resta } from "./resta";
import { Division } from "./division";
import { Conversion } from "./conversion";

console.log(Suma(5,4))
console.log(Multiplicacion(3,6))
console.long(Resta(2,7))
console.log(Division(9,3))

let num1;
let num2;
let btnEj1 = document.getElementById ("Ejercicio1");
let btnEj2 = document.getElementById ("#Ejercicio2");
let btnEj3 = document.getElementById ("Ejercicio3");
let btnEj4 = document.getElementById ("Ejercicio4");
let btnEj5 = document.getElementById ("Ejercicio5");
let Resultado1 = document.getElementById ("ResEj1");
let Resultado2 = document.getElementById ("ResEj2");
let Resultado3 = document.getElementById ("ResEj3");
let Resultado4 = document.getElementById ("ResEj4");
let Resultado5 = document.getElementById ("ResEj5");

function LeerDatos (){
    num1 = Number(prompt("Ingrese Numero 1"));
    num2 = Number(prompt("Ingrese Numero 2"));
}

btnEj1.addEventListener("click", ()=>{
    LeerDatos()
    console.log(Suma(num1, num2))
    console.log(`la suma es $ {Suma(num1, num2)}`)
    Resultado1.innerHTML = `la suma es ${Suma(num1, num2)}`
})

btnEj2.addEventListener("click", ()=>{
    LeerDatos()
    console.log(Multiplicacion(num1, num2))
    console.log(`la Multiplicacion es $ {Multiplicacion(num1, num2)}`)
    Resultado2.innerHTML = `la Multiplicacion es ${Multiplicacion(num1, num2)}`
})
 
btnEj3.addEventListener("click", ()=>{
    LeerDatos()
    console.log(Resta(num1, num2))
    console.log(`la Resta es $ {Resta(num1, num2)}`)
    Resultado3.innerHTML = `la Resta es ${Resta(num1, num2)}`
})

btnEj4.addEventListener("click", ()=>{
    LeerDatos()
    console.log(Division(num1, num2))
    console.log(`la Division es $ {Division(num1, num2)}`)
    Resultado4.innerHTML = `la Division es ${Division(num1, num2)}`
})

btnEj5.addEventListener("click", ()=>{
    LeerDatos()
    console.log(Conversion(num1))
    console.log(`la Conversion es $ {Division(num1)}`)
    Resultado5.innerHTML = `la Conversion es ${Conversion(num1)}`
})