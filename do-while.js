// Escribe un programa que cuente hacia atrás desde 10 hasta 1.
let contador = 10;
do {
    console.log(contador);
    contador--;
} while (contador > 0);


// Crea un programa que sume todos los números del 1 al 100.
let suma = 0;
let num = 1;
do {
    suma += num;
    num++;
} while (num <= 100);
console.log(suma);


// Escribe un programa que genere y muestre los primeros 10 números de la secuencia de Fibonacci.
let num1 = 0, num2 = 1, siguiente, i = 0;
do {
    console.log(num1);
    siguiente = num1 + num2;
    num1 = num2;
    num2 = siguiente;
    i++;
} while (i < 10);
