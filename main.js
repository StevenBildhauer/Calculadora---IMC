
const calcular = document.getElementById('calcular');

function imc (){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !== ''){

        const ValorIMC = (peso / (altura * altura)).toFixed(1);
        let classificacao = '';
        if (ValorIMC < 18.5){
            classificacao = 'abaixo do peso'
        }

        resultado.textContent = `${nome} seu IMC é ${ValorIMC} e você esta ${classificacao}`;
    }else{
        resultado.textContent = 'preencha completo';
    }
}
calcular.addEventListener('click', imc);
