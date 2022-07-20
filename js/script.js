var pacientes = document.querySelectorAll(".paciente")
let botao = document.querySelector("#adicionar-paciente")

botao.addEventListener("click",function(e){
    e.preventDefault()

    let form = document.querySelector("#form-adiciona")
    let tBodyTable = document.querySelector("#tabela-pacientes")

    let nome = form.nome.value
    let peso = form.peso.value
    let altura = form.altura.value
    let gordura = form.gordura.value
    let imc = peso / (altura * altura)
    console.log(nome)
    console.log(peso)
    console.log(altura)
    console.log(gordura)

    let tr = document.createElement("tr")
    let tdNome = document.createElement("td")
    let tdPeso = document.createElement("td")
    let tdAltura = document.createElement("td")
    let tdGordura = document.createElement("td")
    let tdImc = document.createElement("td")
    
    tdNome.textContent = nome
    tdPeso.textContent = peso
    tdAltura.textContent = altura
    tdGordura.textContent = gordura
    tdImc.textContent = imc

    tr.appendChild(tdNome)
    tr.appendChild(tdPeso)
    tr.appendChild(tdAltura)
    tr.appendChild(tdGordura)
    tr.appendChild(tdImc)

    tBodyTable.appendChild(tr)



    
    
    
})






for(let i =0; i < pacientes.length; i++ ) {
    paciente = pacientes[i]

    let tdPeso = paciente.querySelector(".info-peso").textContent
    let tdAltura = paciente.querySelector(".info-altura").textContent
    let imc = paciente.querySelector(".info-imc")
    let imcCalculo = tdPeso / (tdAltura * tdAltura)
    imc.textContent = imcCalculo.toFixed(2)
}





