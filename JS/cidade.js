
function cityinfo() {
    let pop = Number(document.getElementById('pop').value * 1000000)
    let cid = document.getElementById('cidade').value
    let area = Number(document.getElementById('area').value)
    let res = document.getElementById('res')

    if (pop <= 0 || area <= 0 || pop>200000000) { //Caso esteja faltando dados
        window.alert('Preencha os dados corretamente!')
    } else {
        if (cid.length==0){ //se não houver cidade, colocar nome padrão
            cid='sua cidade'
        }
        function densidade(pop) {
            return pop / area
        }

        function porcentagem(pop) {
            return (pop / 200000000) * 100
        }

        res.innerHTML = `<p>A densidade populacional de ${cid} é de ${densidade(pop)} pessoas/km², e sua população representa ${porcentagem(pop)}% da população Brasileira</p>`
    }
}

