let yourUpgrade = document.getElementById('btn-presupuestar');
yourUpgrade.addEventListener('click', selectYourComputer);


let pc = {

    preciofinalPC: 0,
    preciofinalprocesador: 0,
    preciofinalram: 0,
    preciofinaldisco: 0,
    preciofinalvideo: 0
}

function selectYourComputer () {

    let standard = document.getElementById('standard')
    let oficina = document.getElementById('oficina')
    let gamer = document.getElementById('gamer')
    let disenio = document.getElementById('multimedia')

    if (standard.checked) {
        pc.preciofinalPC = 3149
    } else if (oficina.checked) {
        pc.preciofinalPC = 75382
    } else if (gamer.checked) {
        pc.preciofinalPC = 169258
    } else if (disenio.checked) {
        pc.preciofinalPC = 229999
    }

    let ryzen3 = document.getElementById('Ryzen3')
    let ryzen5 = document.getElementById('Ryzen5')
    let ryzen7 = document.getElementById('Ryzen7')

    if (ryzen3.checked) {
        pc.preciofinalprocesador = 21804
    } else if (ryzen5.checked) {
        pc.preciofinalprocesador = 37999
    } else if (ryzen7.checked) {
        pc.preciofinalprocesador = 61899
    }

    let ram32 = document.getElementById('RAM32')
    let ram64 = document.getElementById('RAM64')
    let ram128 = document.getElementById('RAM128')

    if (ram32.checked) {
        pc.preciofinalram = 13999
    } else if (ram64.checked) {
        pc.preciofinalram = 37900
    } else if (ram128.checked) {
        pc.preciofinalram = 89817
    }

    let hdd128 = document.getElementById('hdd128')
    let hhd256 = document.getElementById('hhd256')
    let hhd512 = document.getElementById('hhd512')

    if (hdd128.checked) {
        pc.preciofinaldisco = 4940
    } else if (hhd256.checked) {
        pc.preciofinaldisco = 7778
    } else if (hhd512.checked) {
        pc.preciofinaldisco = 8814
    }

    let NVidia_xx1 = document.getElementById('NVidia_xx1')
    let NVidia_xx2 = document.getElementById('NVidia_xx2')
    let NVidia_xx3 = document.getElementById('NVidia_xx3')

    if (NVidia_xx1.checked) {
        pc.preciofinalvideo = 99552
    } else if (NVidia_xx2.checked) {
        pc.preciofinalvideo = 89658
    } else if (NVidia_xx3.checked) {
        pc.preciofinalvideo = 75149
    }

    let publicarPrecio = document.getElementById('your-upgrade')
    let nroPresupuesto = document.getElementById('presupuesto_nro')

    publicarPrecio.innerHTML = ' $'+ parseInt(pc.preciofinalPC+pc.preciofinalprocesador+pc.preciofinaldisco+pc.preciofinalram+pc.preciofinalvideo)
    
    nroPresupuesto.innerHTML = parseInt(getRandomArbitrary (1000,9999))

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
}


