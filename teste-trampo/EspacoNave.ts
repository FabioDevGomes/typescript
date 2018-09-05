/* import {EspacoNave} from './classe-export';
 */

class EspacoNave{	
	constructor(public nome: string){
	}
	
	exibirNome(){
		console.log(this.nome)
	}
}

class SubClasse extends EspacoNave{
	constructor(public nome: string){
			super('valor construtor')
	}
}


export {SubClasse, EspacoNave}