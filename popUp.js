/*row 0*/

//Define qual botão será selecionado
function getButtonId(id) {
    var btnId = id;

    switch (id) {
        case '1':
            choose_0()
            break;

        default:
            break;
    }
}




let right_col_0 = document.getElementById('area-text-0')
let clickCount = 0
let btn = document.getElementById('btn1')
btn.addEventListener('mouseover', show_0)
btn.addEventListener('mouseout', notShow_0)
btn.addEventListener('click', choose_0)

function show_0() {
    right_col_0.innerHTML = '<input type="text" id="input-0" class = "conjunto"><button id="inputBtn-0" class = "btn ml-1 p-0 pl-1 pr-1 conjunto">Go</button>'
    btn.style.background = "rgb(82, 126, 247)"
    btn.style.border = 'solid'
    btn.style.borderRadius = '50px'
    btn.style.color = 'white'
    btn.style.fontSize = '25px'
    btn.style.padding = '10px'
    btn.style.transition = '0.7s'
}

function notShow_0() {
    document.getElementById('input-0').remove()
    document.getElementById('inputBtn-0').remove()
    btn.style.background = "white"
    btn.style.borderRadius = '50px'
    btn.style.color = '#212529'
    btn.style.fontSize = '16px'
    btn.style.padding = '6px 12px'
    btn.style.transition = '0.7s'
    btn.style.border = 'none'
}

//Aleta o estilo caso o botão seja clicado
function choose_0() {
    clickCount++
    right_col_0.innerHTML = '<input type="text" id="inputChoosed" class = "conjunto"><button id="inputBtnChoosed" class = "btn ml-1 p-0 pl-1 pr-1 conjunto">Go</button>'
    btn.style.background = "rgb(82, 126, 247)"
    btn.style.borderRadius = '50px'
    btn.style.color = 'white'
    btn.style.fontSize = '25px'
    btn.style.padding = '10px'

    //Chama a função para fechar a opção
    if (clickCount == 2) {
        close()
        clickCount = 0;
    }
}


//Retorna para o estilo padrão de maneira suave
function close() {
    document.getElementById('inputChoosed').remove()
    document.getElementById('inputBtnChoosed').remove()
    btn.style.background = "white"
    btn.style.borderRadius = '50px'
    btn.style.color = '#212529'
    btn.style.fontSize = '16px'
    btn.style.padding = '6px 12px'
    btn.style.transition = '0.7s'
    btn.style.border = 'none'
}


/*row 1*/
let right_col_1 = document.getElementById('area-text-1')

function show_1() {
    right_col_1.innerHTML = '<input type="text" id="input-1" class = "conjunto"><button id="inputBtn-1" class = " btn ml-1 p-0 pl-1 pr-1 conjunto">Go</button>'
}

function notShow_1() {
    document.getElementById('input-1').remove()
    document.getElementById('inputBtn-1').remove()

    var btn = document.getElementById('btn1')
    btn.className = 'btn font-weight-bold'
    btn.style.transition = '0.7s'
}

function choose_1(params) {
    right_col_1.innerHTML = '<input type="text" id="inputChoosed" class = "conjunto"><button id="inputBtnChoosed" class = " btn ml-1 p-0 pl-1 pr-1 conjunto">Go</button>'
    var btn = document.getElementById('btn1')
    btn.style.background = "rgb(82, 126, 247)"
    btn.style.borderRadius = '50px'
    btn.style.color = 'white'
    btn.style.fontSize = '25px'
    btn.style.padding = '10px'
}

/*row 2*/

let right_col_2 = document.getElementById('area-text-2')

function show_2() {
    right_col_2.innerHTML = '<input type="text" id="input-2" class = "conjunto"><button id="inputBtn-2" class = " btn ml-1 p-0 pl-1 pr-1 conjunto">Go</button>'
}

function notShow_2() {
    document.getElementById('input-2').remove()
    document.getElementById('inputBtn-2').remove()

    var btn = document.getElementById('btn2')
    btn.className = 'btn font-weight-bold'
    btn.style.transition = '0.7s'
}

function choose_2(params) {
    right_col_2.innerHTML = '<input type="text" id="inputChoosed" class = "conjunto"><button id="inputBtnChoosed" class = " btn ml-1 p-0 pl-1 pr-1 conjunto">Go</button>'
    var btn = document.getElementById('btn2')
    btn.style.background = "rgb(82, 126, 247)"
    btn.style.borderRadius = '50px'
    btn.style.color = 'white'
    btn.style.fontSize = '25px'
    btn.style.padding = '10px'
}

/*row 3*/
let right_col_3 = document.getElementById('area-text-3')

function show_3() {
    right_col_3.innerHTML = '<input type="text" id="input-3" class = "conjunto"><button id="inputBtn-3" class = " btn ml-1 p-0 pl-1 pr-1 conjunto">Go</button>'
}

function notShow_3() {
    document.getElementById('input-3').remove()
    document.getElementById('inputBtn-3').remove()

    var btn = document.getElementById('btn3')
    btn.className = 'btn font-weight-bold'
    btn.style.transition = '0.7s'
}

function choose_3(params) {
    right_col_3.innerHTML = '<input type="text" id="inputChoosed" class = "conjunto"><button id="inputBtnChoosed" class = " btn ml-1 p-0 pl-1 pr-1 conjunto">Go</button>'
    var btn = document.getElementById('btn3')
    btn.style.background = "rgb(82, 126, 247)"
    btn.style.borderRadius = '50px'
    btn.style.color = 'white'
    btn.style.fontSize = '25px'
    btn.style.padding = '10px'
}

/*row 4*/
let right_col_4 = document.getElementById('area-text-4')

function show_4() {
    right_col_4.innerHTML = '<input type="text" id="input-4" class = "conjunto"><button id="inputBtn-4" class = " btn ml-1 p-0 pl-1 pr-1 conjunto">Go</button>'
}

function notShow_4() {
    document.getElementById('input-4').remove()
    document.getElementById('inputBtn-4').remove()

    var btn = document.getElementById('btn4')
    btn.className = 'btn font-weight-bold'
    btn.style.transition = '0.7s'
}

function choose_4(params) {
    right_col_4.innerHTML = '<input type="text" id="inputChoosed" class = "conjunto"><button id="inputBtnChoosed" class = " btn ml-1 p-0 pl-1 pr-1 conjunto">Go</button>'
    var btn = document.getElementById('btn4')
    btn.style.background = "rgb(82, 126, 247)"
    btn.style.borderRadius = '50px'
    btn.style.color = 'white'
    btn.style.fontSize = '25px'
    btn.style.padding = '10px'
}


