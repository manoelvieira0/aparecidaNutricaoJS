var titulo = document.querySelector('.titulo')
titulo.textContent = 'Aparecida Nutricionista'

var pacientes = document.querySelectorAll(".paciente")

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i]

    var tdPeso = paciente.querySelector(".info-peso")
    var tdAltura = paciente.querySelector(".info-altura")
    var peso = tdPeso.textContent
    var altura = tdAltura.textContent
    var tdImc = paciente.querySelector(".info-imc")

    var pesoEhValido = true
    var alturaEhValida = true
    if (peso <= 0 || peso >= 1000) {
        console.log('Peso inválido')
        pesoEhValido = false
        tdImc.textContent = 'Peso Inválido!'
        paciente.classList.add("paciente-invalido")
    }
    if (altura <= 0 || altura >= 3) {
        console.log('Altura Inválida')
        alturaEhValida = false
        tdImc.textContent = 'Altura Inválido!'
        paciente.classList.add("paciente-invalido")
    }

    if (alturaEhValida && pesoEhValido) {
        var imc = peso / (altura * altura)
        tdImc.textContent = imc.toFixed(2)
    }

}

var botaoAdicionar = document.querySelector('#adicionar-paciente')
botaoAdicionar.addEventListener('click', function (event){
    event.preventDefault()
    console.log('Previu')
})