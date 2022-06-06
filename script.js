function verificar() {
    var data = new Date
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    var faniver = window.document.getElementsByName('aniver')

    if (fano.value == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var gênero = ''
        var img = window.document.createElement('img')
        var faniver = window.document.getElementsByName('aniver')
        img.setAttribute('id', 'foto')
        if (faniver[1].checked) {
            idade = idade - 1
        }
        if (fsex[0].checked) {
            gênero = 'homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/bebem.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'img/jovemm.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/adultom.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/idosom.png')
            }

        } else if (fsex[1].checked) {
            gênero = 'mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/bebef.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'img/jovemf.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/adultof.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/idosof.png')
            }


        }

        window.document.querySelector('#res').style.textAlign = 'center'
            //res.style.textAlign = 'center' <-- Assim também funciona
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}