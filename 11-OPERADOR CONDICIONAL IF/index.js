const nome = prompt("Qual é o seu nome?");
const idade = prompt("Quantos anos vc tem?");

if(idade < 18) {
    alert(nome + " " + "você ainda não pode dirigir") 
}else if(idade >= 18) {
    let carteira = prompt( nome + " " +" ,voce já possuí carteira de motorista? Sim/Não")
}else if( carteira == "sim") {
    alerta(nome + " " + "você pode dirigir")
}else {
    alerta(nome + " " + "você ja tem mais de 18 anos, tire sua habilitação para poder dirigir")
}




















