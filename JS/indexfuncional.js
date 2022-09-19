let yourComputer = document.getElementById('btn-computadora');
yourComputer.addEventListener('click', selectYourComputer);

let yourUpgrade = document.getElementById('btn-upgrade');
yourUpgrade.addEventListener('click', selectYourUpgrade);

let preciofinalPC = 0;
let preciofinalprocesador = 0;
//let preciofinalram = 0;
//let preciofinaldisco = 0;

function selectYourComputer () {

    let standard = document.getElementById('standard')
    let oficina = document.getElementById('oficina')
    let gamer = document.getElementById('gamer')
    let disenio = document.getElementById('multimedia')

    if (standard.checked) {
        preciofinalPC = '3149'
        console.log(preciofinalPC)
    } else if (oficina.checked) {
        preciofinalPC = 75382
        console.log(preciofinalPC)
    } else if (gamer.checked) {
        preciofinalPC = 169258
        console.log(preciofinalPC)
    } else if (disenio.checked) {
        preciofinalPC = 229999
        console.log(preciofinalPC)
    }
}

function selectYourUpgrade () {
    let ryzen3 = document.getElementById('Ryzen3')
    let ryzen5 = document.getElementById('Ryzen5')
    let ryzen7 = document.getElementById('Ryzen7')

    if (ryzen3.checked) {
        presupuesto (21804)
        console.log(preciofinalprocesador)
    } else if (ryzen5.checked) {
        presupuesto (37999)
        console.log(preciofinalprocesador)
    } else if (ryzen7.checked) {
        presupuesto (61899)
        console.log(preciofinalprocesador)
    }
}

function presupuesto(sumatoria) {
    console.log(sumatoria)
}