import {ContaConrrente, Conta} from './base-conta'
import { ContaConrrentePF} from './contas'


let contaFabio = new ContaConrrente('hyperdrive')
contaFabio.pagarConta()

let contaFabioPF = new ContaConrrentePF()
contaFabioPF.pagarConta()
