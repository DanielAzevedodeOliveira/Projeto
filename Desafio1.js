//desafio proposto Pelo Felipão da dio:Calculadora de partidas ranqueadas.
function classificacaoDoJogador(vitorias,derrotas){
   let nomeDoJogador = "ShadowStrikerX"
   let nivel = ""
   let rankingDoJogador = vitorias - derrotas
   
   if(vitorias <=10){
      nivel = "Ferro"
   }else if(vitorias <= 11 && vitorias <=20){
      nivel = "Bronze"
   }else if(vitorias <= 21 && vitorias <=50){
      nivel = "Prata"
   }else if(vitorias <= 51 && vitorias <=80){
      nivel = "Ouro"
   }else if(vitorias <= 81 && vitorias <=90){
      nivel = "Diamante"
   }else if(vitorias >= 91 || vitorias === 100 ){
      nivel = "Lendário"
   }else{
      nivel = "Imortal"
   }

   return "O Herói chamado "+nomeDoJogador+" tem saldo de "+rankingDoJogador+" está no nível de "+ nivel
}
//Uma variável para guardar o resultado da função.

let resultado = classificacaoDoJogador(115,15)

console.log(resultado)