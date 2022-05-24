import { calculaIMC } from "./oms.js";
import { Conta } from "./models/conta.js";

const imc = calculaIMC({ peso: 78, altura: 1.71 })


const conta = new Conta({
    titular: 'Flávio',
    banco: '123',
    agencia: '456',
    numero: '789'
})
console.log(conta)

const object1 = {nome: 'Flávio'}
const object2 = {peso: 78}
