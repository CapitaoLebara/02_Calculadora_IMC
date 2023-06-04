function calcular() {
    var nome = document.getElementById("nome").value;
    var alt = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;
    var resultado = document.getElementById("resultado")
    if (nome !== '' && alt !== '' && peso !== '') {
        var imc = peso / (alt * alt)
        resultado.textContent = `seu imc é ${imc.toFixed(2)}`


        if (imc <= 18.5) {
            resultado.textContent = nome + " seu imc é " + imc.toFixed(2) + " você esta olivia palito"
        } else if (imc > 18.5 && imc <= 24.9) {
            resultado.textContent = nome + " seu imc é " + imc.toFixed(2) + " você esta saudavel"

        } else if (imc > 24.9 && imc <= 29.9) {
            resultado.textContent = nome + " seu imc é " + imc.toFixed(2) + " você esta gorda"

        } else if (imc > 29.9 && imc <= 34.9) {
            resultado.textContent = nome + " seu imc é " + imc.toFixed(2) + " você esta muito gorda"

        } else if (imc > 34.9 && imc <= 39.9) {
            resultado.textContent = nome + " seu imc é " + imc.toFixed(2) + " você esta gorda demais, quer morrer doido?"

        } else if (imc >= 40) {
            resultado.textContent = nome + " mds seu imc é " + imc.toFixed(2) + " você vai morrer sabia desgraçada, vai emagrecer, voce não sabe o valor de um pai e uma mãe, qual o seu problema cara, meu deus so tem amador aqui"
        }



    } else {
        resultado.textContent = "[ERRO] Preencha todos os campos!!!"
    }



}
calcular.addEventListener('click', calcular);