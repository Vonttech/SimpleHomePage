//Botões
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')
let btn5 = document.getElementById('btn5')

let btnArray = [btn1, btn2, btn3, btn4, btn5]

/*Adicionando aos botões 
    classes
    eventos
    estado
*/
function addFeatures(item) {
    item.className = 'btn font-weight-bold'
    item.setAttribute('state', 'notClicked')
    item.addEventListener('mouseover', function () { mouseIn(item.id) })
    item.setAttribute('onmouseout', 'mouseOut(id)')
    item.addEventListener('click', function () { clicado(item.id) })
}
btnArray.forEach(addFeatures)


//Efeitos ao botão
function mouseIn(id) {
    var btn = document.getElementById(id)
    btn.style.color = 'white'
    btn.style.fontSize = '25px'
    btn.style.background = 'rgb(82, 126, 247)'
    btn.style.transition = '0.7s'
    btn.style.borderRadius = '30px'
    btn.style.padding = '10px'
}

function mouseOut(id) {
    var btn = document.getElementById(id)
    btn.style.color = '#212529'
    btn.style.fontSize = '16px'
    btn.style.background = 'none'
    btn.style.transition = '0.7s'
    btn.style.borderRadius = '0px'
    btn.style.padding = '6px 12px'
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

    } else if (btn.getAttribute('state') == 'clicked') {
        btn.setAttribute('state', 'notClicked')
        btn.setAttribute('onmouseout', 'mouseOut(id)')
        btn.style.color = '#212529'
        btn.style.fontSize = '16px'
        btn.style.background = 'none'
        btn.style.transition = '0.7s'
        btn.style.borderRadius = '0px'
        btn.style.padding = '6px 12px'
    }

}







