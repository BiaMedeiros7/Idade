function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
    }if (fsex[0].checked) {
        gênero = 'Homem'
        if(idade >=0 && idade < 10){
            // Criança
            img.setAttribute('src', 'menino.jpg')
        } else if (idade < 21) {
            // Jovem
            img.setAttribute('src', 'homemjovem.jpg')
        } else if (idade < 40) {
            // Adulto
            img.setAttribute('src', 'homemadulto.jpg')
        } else {
            // Idoso
            img.setAttribute('src', 'velho.jpg')
        }
    } else if (fsex[1].checked){
        gênero = 'Mulher'
        if ( idade >=0 && idade < 10){
            // Criança
            img.setAttribute('src', 'menina.jpg')
        } else if (idade < 21) {
            // Jovem
            img.setAttribute('src', 'mulherjovem.jpg')
        } else if (idade < 40) {
            // Adulto
            img.setAttribute('src', 'mulheradulta.jpg')
        } else {
            // Idoso
            img.setAttribute('src', 'velha.jpg')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
}
