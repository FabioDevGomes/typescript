import { EspacoNave } from "./EspacoNave";
import { Conta } from "./classe-export";

import * as _ from "lodash";
console.log(_.pad('typescript exemplos', 40, '='))
/* import { Conta, ContaGenerica } from "./classe-export";
 */
/* import { EspacoNave } from "./EspacoNave";
 */

let message: string = "valor para string"
console.log(message)

let tipoNumer: number = 5

console.log(tipoNumer);

function exemploFuncao(name: string): void{
	console.log('o nome infomrado foi '+ name)
}

exemploFuncao('Fábio')

let exemplo2 = function(param: number, param2?: string):boolean{
	
	console.log('valor opcional'+param2);
	console.log(`valor opcional > ${param2}`);
	
	return param < 12
}

let call = (name: string = 'teste') => console.log(`valor opcional > ${name}`)					

console.log(exemplo2(4))
console.log(exemplo2(4, 'Fábio'))

call('Hello again')
call()

let variavelObjeto = new EspacoNave('valor construtor')
variavelObjeto.exibirNome()

let contaQualquer = new Conta(445)



