import { Cliente } from "./cliente.js";
import { ContaCorrente } from "./contaCorrente.js";

const cliente = new Cliente('Ricardo', 10483129239);
const contaCorrente = new ContaCorrente(cliente, '101-1');

contaCorrente.depositar(1000);
console.log('conta cliente: ');
console.log(contaCorrente);


contaCorrente.sacar(100);
console.log('Após saque: ' + contaCorrente._saldo);



const outroCliente = new Cliente('maria', 11223344);
const contaCorrenteMaria = new ContaCorrente(outroCliente, '102-1');

contaCorrenteMaria.depositar(1000);
console.log(contaCorrenteMaria);

console.log('Após transferência entre contas: ');
contaCorrenteMaria.transferir(200, contaCorrente);
console.log('Após trasferência: ' + `Ricardo: ${contaCorrente._saldo}` + ',' + `Maria: ${contaCorrenteMaria._saldo}`);

console.log('Número de contas: ' + ContaCorrente.numeroDeContas)
