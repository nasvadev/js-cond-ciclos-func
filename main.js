//EJERCICIO 1: Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

function parImpar(num) {
  if (num % 2 === 0) {
    console.log(num + " es par");
  } else {
    console.log(num + " es impar");
  }
}
parImpar(11);
parImpar(18);

// EJERCICIO 2: Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

function mayorMenor(num1, num2) {
  if (num1 > num2) {
    console.log(num1 + " es mayor que " + num2);
  } else if (num2 > num1) {
    console.log(num2 + " es mayor que " + num1);
  } else {
    console.log("Los números " + num1 + " y " + num2 + " son iguales");
  }
}

mayorMenor(373, 927);
mayorMenor(-10, 10);
mayorMenor(11, 11);

//EJERCICIO 3: Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

function multiploDeCinco(num) {
  if (num % 5 === 0) {
    console.log(num + " es múltiplo de 5");
  } else {
    console.log(num + " no es múltiplo de 5");
  }
}

multiploDeCinco(10);
multiploDeCinco(11);

//EJERCICIO 4: Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

function imprimirHasta(num) {
  for (let i = 0; i <= num; i++) {
    console.log(i);
  }
}

imprimirHasta(20);

//EJERCICIO 5: Crear una función que reciba una palabra y un número por parámetro e imprima por consola esa palabra la cantidad correspondiente al número indicado.

function palabraVeces(palabra, veces) {
  let palabraFinal = "";
  for (let i = 0; i < veces; i++) {
    palabraFinal += palabra + " ";
  }
  console.log(palabraFinal);
}

palabraVeces("Javascript", 15);

//EJERCICIO 6: Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

const tiendaMascotas = [
  "Alimento balanceado",
  "Juguetes",
  "Collar para perros",
  "Correa para perros",
  "Shampoo para perros",
  "Arena para gatos",
];

function producto(tiendaMascotas) {
  for (let i = 0; i < tiendaMascotas.length; i++) {
    const producto = tiendaMascotas[i];
    console.log("Producto:", producto);
  }
}

producto(tiendaMascotas);

// EJERCICIO 7: Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

const animales = [
  "Perro",
  "Gato",
  "Conejo",
  "Loro",
  "Pez",
  "Caballo",
  "Tortuga",
  "Ballena",
  "Elefante",
  "Tigre",
];

function omitirQuinto(listaAnimales) {
  for (let i = 0; i < listaAnimales.length; i++) {
    if (i !== 4) {
      console.log(listaAnimales[i]);
    }
  }
}

omitirQuinto(animales);

// EJERCICIO 8: Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

const nums = [3, 25, 32, 48, 59, 112];
const multiplicador = 5;

function multiplicar(nums, multiplicador) {
  for (let i = 0; i < nums.length; i++) {
    const resultado = nums[i] * multiplicador;
    console.log(resultado);
  }
}

multiplicar(nums, multiplicador);
