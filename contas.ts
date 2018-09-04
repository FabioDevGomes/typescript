import {ContaConrrente, Conta} from './base-conta'

class ContaConrrentePF extends ContaConrrente implements Conta{

 numero: string

 constructor(){
   super('valor para super')
   this.numero = '5 string'
 }

}

export {ContaConrrentePF}
