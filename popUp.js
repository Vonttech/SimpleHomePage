/*
    Recupera todos os elementos button por ID
    Adiciona ao vetor allBtns
*/
let btnIds = ['btn1', 'btn2', 'btn3', 'btn4', 'btn5']
let allBtns = []

btnIds.forEach(function (id) {
    var btn = document.getElementById(id)
    allBtns.push(btn)
})

/**
 *  Recupera todas as areas de inserção de input 
 *  Adiciona a um vetor
 */
let areaIds = ['area-text-1', 'area-text-2', 'area-text-3', 'area-text-4', 'area-text-5']
let areaTxt = []

areaIds.forEach(function (id) {
    var area = document.getElementById(id)
    areaTxt.push(area)
})

/*
    Retorna uma lista de todos os elementos button do body
    Converte para um array
    E atribui classes
 */
let allDocBtnsTag = document.body.getElementsByTagName('button')
let allDocBtnsArray = Array.from(allDocBtnsTag)

allDocBtnsArray.forEach(function (item) {
    item.className = 'btn font-weight-bold'
})


/*Adicionando aos botões 
    eventos
    estado
*/
function addFeatures(item) {
    item.setAttribute('state', 'notClicked')
    item.addEventListener('mouseover', function () { mouseIn(item.id) })
    item.setAttribute('onmouseout', 'mouseOut(id)')
    item.addEventListener('click', function () { clicado(item.id) })
}
allDocBtnsArray.forEach(addFeatures)



//Efeitos ao botão
function mouseIn(id) {
    // Verifica se  o index dos arrays são iguais
    var btn = document.getElementById(id)
    btn.style.color = 'white'
    btn.style.fontSize = '25px'
    btn.style.background = 'rgb(82, 126, 247)'
    btn.style.transition = '0.7s'
    btn.style.borderRadius = '30px'
    btn.style.padding = '10px'

    criaInput(id)


}

function mouseOut(id) {
    var btn = document.getElementById(id)
    btn.style.color = '#212529'
    btn.style.fontSize = '16px'
    btn.style.background = 'none'
    btn.style.transition = '0.7s'
    btn.style.borderRadius = '0px'
    btn.style.padding = '6px 12px'

    destroiInput(id)
}

function clicado(id) {
    var btn = document.getElementById(id)
    btn.setAttribute('onmouseout', '')
    if (btn.getAttribute('state') == 'notClicked') {
        btn.setAttribute('state', 'clicked')
        btn.style.color = 'white'
        btn.style.fontSize = '25px'
        btn.style.background = 'rgb(82, 126, 247)'
        btn.style.borderRadius = '30px'
        btn.style.padding = '10px'
        criaInput(id)

    } else if (btn.getAttribute('state') == 'clicked') {
        btn.setAttribute('state', 'notClicked')
        btn.setAttribute('onmouseout', 'mouseOut(id)')
        btn.style.color = '#212529'
        btn.style.fontSize = '16px'
        btn.style.background = 'none'
        btn.style.transition = '0.7s'
        btn.style.borderRadius = '0px'
        btn.style.padding = '6px 12px'
        destroiInput(id)
    }

}

/**
 * Compara as ids do botao e area de input respectiva de modo padronizado 
 * Cria inputs
 */
function criaInput(id) {
    var btnId = id.replace('btn', '')
    areaIds.forEach(function (item) {
        var textId = item.replace('area-text-', '')

        if (textId === btnId) {
            document.getElementById('area-text-' + textId).innerHTML = '<input type="text"> <button class="btn">Go</button>'
        }
    })

}

function destroiInput(id) {
    var btnId = id.replace('btn', '')

    areaIds.forEach(function (item) {
        var textId = item.replace('area-text-', '')

        if (textId === btnId) {
            document.getElementById('area-text-' + textId).innerHTML = ''
        }
    })

}






