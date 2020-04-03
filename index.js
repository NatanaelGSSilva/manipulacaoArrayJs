const faker = require('faker'); // pegando a lib

faker.locale = 'pt_BR';// eu quero minha massa de dados em pt br
const Cliente = [];// criando o array em branco

for (let index = 0; index < 1000; index++) {
  const name = faker.name.findName();
  const birthday = faker.date.past(109, 2019);
  const genre = faker.random.number() == true ? 'M' : 'F';
  const lastpurchase = faker.date.past();
  const countpurchase = faker.random.number(50);

  client = { // vai receber alguma coisa
    name,
    birthday,
    genre,
    lastpurchase,
    countpurchase,
  };
  Cliente.push(client);// adiciona no array esse cliente aqui
}

// 1.0 Desenvolva, utilizando filter , uma função que, dado um caractere de entrada,
// retorne todos os registros de clientes cujo o nome inicia com o caractere

const primeiraLetra = Cliente.filter((value) => value.name[0] == 'A');
console.log('Filtrando os Clientes com a Letra A');
console.log(primeiraLetra);
console.log('----------------------------------------');
console.log('----------------------------------------');


// 2.0 Retorne o array de clientes

const arrays = Cliente.map((value) => value);
console.log('Array de Clientes');
console.log(arrays);
console.log('----------------------------------------');
console.log('----------------------------------------');

// 3.0 Desenvolva uma função que,
// dado o caractere de entrada,
// retorna apenas um número com o total de
// registros encontrados

const totalRegistros = Cliente.map((value) => value.name[0] == 'N')
  .reduce((acc, next) => (acc += next));
console.log('Total de Registros com a Letra N');
console.log(totalRegistros);
console.log('--------------------------------------');
console.log('--------------------------------------');

// 4.0 Desenvolva uma função que retorne apenas
// os nomes dos clientes

const nomesClientes = Cliente.map((value) => value.name);
console.log('Os nomes dos Clientes São: ');
console.log(nomesClientes);

// 5.0 Desenvolva uma função que retorne apenas
// o primeiro nome dos clientes

const nomeCliente = Cliente.map((value) => value.name.split(' ')[0]);
console.log('Os nomes dos Clientes São :');
console.log(nomeCliente);
console.log('----------------------------------------');
console.log('----------------------------------------');

// 6.0 Desenvolva uma função que retorne apenas o primeiro nome dos clientes
// cujo os nomes começam com o caractere de entrada da função.

const primeiroNomeLetra = Cliente.map((value) => value.name.split(' ')[0])
  .filter((value2) => value2.charAt(0) === 'N');
console.log('O primeiro nome dos Clientes que começam com N São: ');
console.log(primeiroNomeLetra);
console.log('----------------------------------------');
console.log('----------------------------------------');

// 7.0 Desenvolva uma função que retorne
// todos os usuários que são maiores de idade.
// const newPessoa = Cliente.filter((value)=> value.birthday.getFullYear() <= 2001-01-01)

const idade = Cliente.filter((value) => value.birthday <= 2001);
console.log('Os Maiores de Idade São');
console.log(idade);
console.log('--------------------------------');
console.log('--------------------------------');

// 8.0 Desenvolva uma função que, dado um nome de entrada
// retorna se o nome está contido na lista.
// const nomeContido = Cliente.includes(value=>value.split(" ")[0] ==="Norberto")

const nomeContido = Cliente.map((value) => value.name.split(' ')[0])
  .includes('Norberto') ? ('O nome está na lista') : ('O nome não está na lista');
console.log(nomeContido);
console.log('--------------------------------');
console.log('--------------------------------');

// 9.0 Implemente uma função que retorna o
// total de vendas realizadas somando as compras de todos os clientes.

const totalVendas = Cliente.map((value) => value.countpurchase)
  .reduce((sum, next) => (sum += next));// acumulador
console.log('A soma de vendas realizadas é ');
console.log(totalVendas);
console.log('----------------------------------------------');
console.log('----------------------------------------------');

// 10.0 Não Fiz Implemente uma função que retorne os dados dos clientes
// que não compram há mais de 1 ano.


// --11-- Pronto Implemente uma função que retorne os dados dos clientes que já realizaram mais de 15 compras.
const maisQuinse = Cliente.filter((value) => value.countpurchase >= 50);
console.log('Clientes que Compram N Coisas: ');
console.log(maisQuinse);
