// app.js

const calculadora = require('./calculadora');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

function realizarOperacao() {
  readline.question('Digite o primeiro número: ', (num1) => {
    const numero1 = parseFloat(num1);
    if (isNaN(numero1)) {
      console.log('Entrada inválida. Por favor, digite um número.');
      realizarOperacao();
      return;
    }

    readline.question('Digite a operação (+, -, *, /): ', (operacao) => {
      if (!['+', '-', '*', '/'].includes(operacao)) {
        console.log('Operação inválida. Por favor, digite +, -, *, ou /.');
        realizarOperacao();
        return;
      }

      readline.question('Digite o segundo número: ', (num2) => {
        const numero2 = parseFloat(num2);
        if (isNaN(numero2)) {
          console.log('Entrada inválida. Por favor, digite um número.');
          realizarOperacao();
          return;
        }

        let resultado;
        switch (operacao) {
          case '+':
            resultado = calculadora.somar(numero1, numero2);
            break;
          case '-':
            resultado = calculadora.subtrair(numero1, numero2);
            break;
          case '*':
            resultado = calculadora.multiplicar(numero1, numero2);
            break;
          case '/':
            resultado = calculadora.dividir(numero1, numero2);
            break;
        }

        console.log(`O resultado de ${numero1} ${operacao} ${numero2} é: ${resultado}`);
        readline.question('Deseja realizar outra operação? (s/n): ', (resposta) => {
          if (resposta.toLowerCase() === 's') {
            realizarOperacao();
          } else {
            readline.close();
          }
        });
      });
    });
  });
}

console.log('Calculadora Simples em Node.js');
realizarOperacao();