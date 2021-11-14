/*
 *
 * Vamos descobrir se o número é par ou impar,
 * para isso vamos pensar na matemática primeiro
 * 
 * Quando dividimos x por y tem um resto da divisão
 * 20 / 10
 * 0    2
 * 
 * O resto da divisão é aquele 0 embaixo do 20, quando
 * temos um número par, esse resto da divisão é sempre zero
 * já quando temos um número impar, o resto da divisão da qualquer
 * número menos 0
 * 
 * Para poder descobrir o resto da divisão em programação, usamos
 * o % por exemplo:
 */

let x = 20
let y = 10
let resto = x % y
console.log(resto)

/*
 * Agora o desafio é o seguinte:
 * descubra se o número é par ou impar
 * e mostre no console uma mensagem dizendo
 * "é par" ou "é impar"
 * 
 * Dica:
 * > Para ver se o resto da divisão é igual a 0 use:
 * variavel % 2 == 0
 * 
 */