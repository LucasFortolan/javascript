function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = document.getElementById('txtAno');
    var res = document.querySelector('div#res')
    if (fAno.value.length == 0 ||  Number(fAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fSex = document.getElementsByName('radSex')
        var idade = ano - Number(fAno.value)
        // É como se eu tivesse colocado <img id = "foto" src="foto" alt="Foto"> embaixo do div
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        // Verifica a opção escolhida no input
        if (fSex[0].checked) 
        {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
            // Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }        
        }
        else if (fSex[1].checked)  {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
            // Idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }   
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Dectamos ${genero} com ${idade} anos.`
        // Adiciona um elemento embaixo
        res.appendChild(img)
    }
}