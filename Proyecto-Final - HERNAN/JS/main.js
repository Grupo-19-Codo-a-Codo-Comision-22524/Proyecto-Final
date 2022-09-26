let presupuesto = document.getElementById('btn-presupuestar');
presupuesto.addEventListener('click', selectYourComputer);

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
    let campoPresupuesto = document.getElementById('detalle')

    if (standard.checked) {
        pc.preciofinalPC = 31499
        let p = document.createElement('p')
        campoPresupuesto.appendChild(p);
        p.innerHTML = ' ' + '$' + pc.preciofinalPC

    } else if (oficina.checked) {
        pc.preciofinalPC = 75382
        let p = document.createElement('p')
        campoPresupuesto.appendChild(p);
        p.innerHTML = ' ' + '$' + pc.preciofinalPC

    } else if (gamer.checked) {
        pc.preciofinalPC = 169258
        let p = document.createElement('p')
        campoPresupuesto.appendChild(p);
        p.innerHTML = ' ' + '$' + pc.preciofinalPC

    } else if (disenio.checked) {
        pc.preciofinalPC = 229999
        let p = document.createElement('p')
        campoPresupuesto.appendChild(p);
        p.innerHTML = ' ' + '$' + pc.preciofinalPC
    }

    let ryzen3 = document.getElementById('Ryzen3')
    let ryzen5 = document.getElementById('Ryzen5')
    let ryzen7 = document.getElementById('Ryzen7')
    let ryzen9 = document.getElementById('Ryzen9')

    if (ryzen3.checked) {
        pc.preciofinalprocesador = 21804
        let p = document.createElement('p')
        campoPresupuesto.appendChild(p);
        p.innerHTML = 'Microprocesador AMD Ryzen 3 $' + pc.preciofinalprocesador

    } else if (ryzen5.checked) {
        pc.preciofinalprocesador = 37999
        let p = document.createElement('p')
        campoPresupuesto.appendChild(p);
        p.innerHTML = 'Microprocesador AMD Ryzen 5 $' + pc.preciofinalprocesador

    } else if (ryzen7.checked) {
        pc.preciofinalprocesador = 61899
        let p = document.createElement('p')
        campoPresupuesto.appendChild(p);
        p.innerHTML = 'Microprocesador AMD Ryzen 7 $' + pc.preciofinalprocesador

    } else if (ryzen9.checked) {
        pc.preciofinalprocesador = 177999
        let p = document.createElement('p')
        campoPresupuesto.appendChild(p);
    p.innerHTML = 'Microprocesador AMD Ryzen 9 $' + pc.preciofinalprocesador
    }

    let ram16 = document.getElementById('RAM16')
    let ram32 = document.getElementById('RAM32')
    let ram64 = document.getElementById('RAM64')
    let ram128 = document.getElementById('RAM128')

    if (ram16.checked) {
        pc.preciofinalram = 13999
        let p = document.createElement('p')
        campoPresupuesto.appendChild(p);
        p.innerHTML = ' ' + '$' + pc.preciofinalram
    } else if (ram32.checked) {
        pc.preciofinalram = 37900
        let p = document.createElement('p')
        campoPresupuesto.appendChild(p);
        p.innerHTML = ' ' + '$' + pc.preciofinalram
        
    } else if (ram64.checked) {
        pc.preciofinalram = 89817
        let p = document.createElement('p')
        campoPresupuesto.appendChild(p);
        p.innerHTML = ' ' + '$' + pc.preciofinalram
    } else if (ram128.checked) {
        pc.preciofinalram = 89817
        let p = document.createElement('p')
        campoPresupuesto.appendChild(p);
        p.innerHTML = ' ' + '$' + pc.preciofinalram

    }
    let hdd128 = document.getElementById('hdd128')
    let hhd256 = document.getElementById('hhd256')
    let hhd512 = document.getElementById('hhd512')

    if (hdd128.checked) {
        pc.preciofinaldisco = 4940
        let p = document.createElement('p')
        campoPresupuesto.appendChild(p);
        p.innerHTML = ' ' + '$' + pc.preciofinaldisco

    } else if (hhd256.checked) {
        pc.preciofinaldisco = 7778
        let p = document.createElement('p')
        campoPresupuesto.appendChild(p);
        p.innerHTML = ' ' + '$' + pc.preciofinaldisco

    } else if (hhd512.checked) {
        pc.preciofinaldisco = 8814
        let p = document.createElement('p')
        campoPresupuesto.appendChild(p);
        p.innerHTML = ' ' + '$' + pc.preciofinaldisco
    }

    let NVidia_xx1 = document.getElementById('NVidia_xx1')
    let NVidia_xx2 = document.getElementById('NVidia_xx2')
    let NVidia_xx3 = document.getElementById('NVidia_xx3')

    if (NVidia_xx1.checked) {
        pc.preciofinalvideo = 99552
        let p = document.createElement('p')
        campoPresupuesto.appendChild(p);
        p.innerHTML = ' ' + '$' + pc.preciofinalvideo

    } else if (NVidia_xx2.checked) {
        pc.preciofinalvideo = 89658
        let p = document.createElement('p')
        campoPresupuesto.appendChild(p);
        p.innerHTML = ' ' + '$' + pc.preciofinalvideo

    } else if (NVidia_xx3.checked) {
        pc.preciofinalvideo = 75149
        let p = document.createElement('p')
        campoPresupuesto.appendChild(p);
        p.innerHTML = ' ' + '$' + pc.preciofinalvideo
    }

    let publicarPrecio = document.getElementById('your-upgrade')
    let nroPresupuesto = document.getElementById('presupuesto_nro')

    publicarPrecio.innerHTML = ' $'+ parseInt(pc.preciofinalPC+pc.preciofinalprocesador+pc.preciofinaldisco+pc.preciofinalram+pc.preciofinalvideo)
    
    nroPresupuesto.innerHTML = parseInt(getRandomArbitrary (1000,9999))

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
}