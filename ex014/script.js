function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        // BOM DIA
        img.src = 'imagens/imagem-manha.png'
        document.body.style.background = '#DF9816'
    } else if (hora >= 12 && hora <= 18){
        //BOA TARDE
        img.src = 'imagens/imagem-tarde.png'
        document.body.style.background = '#F9A88D'
    } else{
        //BOA NOITE
        img.src = 'imagens/imagem-noite.png'
        document.body.style.background = '#1C4E59'
    }
}
