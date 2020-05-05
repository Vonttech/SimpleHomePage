let right_col = document.getElementById('right-col')

function show() {
    right_col.innerHTML = '<input type="text" id="input" class = "conjunto"><button id="inputBtn" class = "conjunto">Go</button>'
}

function notShow() {
    document.getElementById('input').remove()
    document.getElementById('inputBtn').remove()
}

function choose(params) {
    right_col.innerHTML = '<input type="text" id="inputChoosed" class = "conjunto"><button id="inputBtnChoosed" class = "conjunto">Go</button>'
}