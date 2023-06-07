function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 13){
                //criança
                img.setAttribute('src','imagens/foto-menino.png')
            } else if (idade >=10 && idade < 24) {
                //jovem
                img.setAttribute('src','imagens/foto-homem-jovem.png')
            } else if (idade < 55){
                //adulto
                img.setAttribute('src','imagens/foto-homem-adulto.png')
            } else {
                //idoso
                img.setAttribute('src','imagens/foto-homem-idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 13){
                //criança
                img.setAttribute('src','imagens/foto-menina.png')
            } else if (idade >=10 && idade < 24) {
                //jovem
                img.setAttribute('src','imagens/foto-mulher-jovem.png')
            } else if (idade < 55){
                //adulta
                img.setAttribute('src','imagens/foto-mulher-adulta.png')
            } else {
                //idosa
                img.setAttribute('src','imagens/foto-mulher-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}