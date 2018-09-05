
class Conta implements ContaGenerica{

	numero: number

	constructor(numero: number){
		this.numero = numero
	}

	pagarConta(numero: number){
		this.numero = numero
	}
}

interface ContaGenerica{
	numero: number
}

export {Conta, ContaGenerica}