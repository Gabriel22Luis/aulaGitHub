let Name = prompt(`Qual seu nome??`);
alert(`Seja bem-vindo ${Name}`)

let idade = parseInt(prompt(`Qual sua idade`));

if (idade >= 18 && idade <= 59) {
    alert(`Adulto`);
}

else if (idade >= 60) {
    alert(`Idoso`);
}

else {
    alert(`Menor de idade`)
}