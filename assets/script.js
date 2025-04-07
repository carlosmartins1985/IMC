function calculadoraIMC (){

    const form = document.querySelector('#formulario');

    function recebeEventoForm(evento){
        evento.preventDefault();

        const inputPeso = form.querySelector('#peso');
        const inputAltura = form.querySelector('#altura');

        const peso = validarPeso(inputPeso);
        if(!peso) return;
        const altura = validarAltura(inputAltura);
        if(!altura) return;

        const IMC = calculoIMC(peso, altura);
        const nivelImc = getNivelImc(IMC);
        const msg = `O seu imc é: ${IMC} (${nivelImc}).`

        setResultado(msg, true);
        
        function validarPeso(inputPeso) {
            const peso = Number(inputPeso.value);

            if(isNaN(peso) || peso <= 0 || peso >= 600){
                setResultado('Peso invalido', false);
                console.log('Peso invalido.');
                return false;
            } else {
                console.log(`Peso valido com o valor de ${peso}`);
                return peso;
            }
        }

        function validarAltura(inputAltura) {
            const altura = Number(inputAltura.value);

            if(isNaN(altura) || altura <= 0) {
                setResultado('Altura invalida', false);
                console.log('Altura invalida.');
                return false;
            } else {
                console.log(`Altura valida com o valor de ${altura}`);
                return altura;
            }
        }

        function calculoIMC(peso, altura) {
            const imc = peso / (altura * altura);
            console.log(imc.toFixed(2));
            return imc.toFixed(2);
        }

        function getNivelImc(IMC) {
            const nivel = ['Abaixo do peso', 'Peso normal',
            'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2',
            'Obesidade grau 3'];
    
            if (IMC >= 39.9) return nivel[5];
            if (IMC >= 34.9) return nivel[4];
            if (IMC >= 29.9) return nivel[3];
            if (IMC >= 24.9) return nivel[2];
            if (IMC >= 18.5) return nivel[1];
            if (IMC < 18.5) return nivel[0];
        }
    
        function criaP() {
            const p = document.createElement('p');
            return p;
        }

        function setResultado(msg, isValid) {
            const resultado = document.querySelector('.resultado');
    
            resultado.innerHTML = '';
    
            const p = criaP();
    
            if (isValid) {
                p.classList.add('resultadoOk');
            } else {
                p.classList.add('erro');
            }
    
            p.innerHTML = msg;
            resultado.appendChild(p);
        }

    }
    form.addEventListener('submit', recebeEventoForm);
}
calculadoraIMC();


