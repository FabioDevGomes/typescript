class ContaConrrente {
  constructor (conta: string){
    console.log(conta)
  }

  pagarConta(){
    if (Math.random() > 10){
      console.log('maior 1 10 '+Math.random())
    }else{
      console.log('menor q 10 '+Math.random())
    }
  }

}

interface Conta{
  numero: string
}

export{ContaConrrente, Conta}
