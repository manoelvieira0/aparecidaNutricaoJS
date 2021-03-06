var botaoAdicionar = document.querySelector("#buscar-pacientes")

botaoAdicionar.addEventListener("click", function () {
    console.log('Buscando')

    var xhr = new XMLHttpRequest()

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes")

    xhr.addEventListener("load", function () {
        var erroajax = document.querySelector("#erro-ajax")
        if(xhr.status == 200){
            erroajax.classList.add("invisivel")
            var resposta = xhr.responseText
            var pacientes = JSON.parse(resposta)
            pacientes.forEach(function (paciente) {
                adicionaPacienteNaTabela(paciente)
            })
        }else{
            console.log(xhr.status)
            console.log(xhr.responseText)
            erroajax.classList.remove("invisivel")

        }
        
    })

    xhr.send()
})