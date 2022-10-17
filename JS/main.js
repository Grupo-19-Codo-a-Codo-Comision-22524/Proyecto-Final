// PRESUPUESTO //

let presupuesto = document.getElementById("btn-presupuestar");
presupuesto.addEventListener("click", selectYourComputer);

let pc = {
  preciofinalPC: 0,
  preciofinalprocesador: 0,
  preciofinalram: 0,
  preciofinaldisco: 0,
  preciofinalvideo: 0,
  preciotacladogamer: 0,
  preciomicrofono: 0,
  precioauriculares: 0,
  preciomouse: 0,
  preciomonitor: 0,
  preciogabinete: 0,
  preciosoporte: 0,
  preciocable: 0,
  valorDolar: 0,
};

function selectYourComputer() {
  let standard = document.getElementById("standard");
  let oficina = document.getElementById("oficina");
  let gamer = document.getElementById("gamer");
  let disenio = document.getElementById("multimedia");
  let campoPresupuesto = document.getElementById("detalle");

  if (standard.checked) {
    pc.preciofinalPC = 124.01 * pc.valorDolar;
    let detalle = document.createElement("p");
    campoPresupuesto.appendChild(detalle);
    detalle.innerHTML =
      "PC diseño domestico " + "$" + parseFloat(pc.preciofinalPC).toFixed(2);
  } else if (oficina.checked) {
    pc.preciofinalPC = 296.78 * pc.valorDolar;
    let p = document.createElement("p");
    campoPresupuesto.appendChild(p);
    p.innerHTML =
      "PC diseño oficina " + "$" + parseFloat(pc.preciofinalPC).toFixed(2);
  } else if (gamer.checked) {
    pc.preciofinalPC = 666.37 * pc.valorDolar;
    let p = document.createElement("p");
    campoPresupuesto.appendChild(p);
    p.innerHTML =
      "PC diseño gamer " + "$" + parseFloat(pc.preciofinalPC).toFixed(2);
  } else if (disenio.checked) {
    pc.preciofinalPC = 905.51 * pc.valorDolar;
    let p = document.createElement("p");
    campoPresupuesto.appendChild(p);
    p.innerHTML =
      "PC diseño multimedia " + "$" + parseFloat(pc.preciofinalPC).toFixed(2);
  }

  let ryzen3 = document.getElementById("Ryzen3");
  let ryzen5 = document.getElementById("Ryzen5");
  let ryzen7 = document.getElementById("Ryzen7");
  let ryzen9 = document.getElementById("Ryzen9");

  if (ryzen3.checked) {
    pc.preciofinalprocesador = 85.84 * pc.valorDolar;
    let p = document.createElement("p");
    campoPresupuesto.appendChild(p);
    p.innerHTML =
      "Microprocesador AMD Ryzen 3 $" +
      parseFloat(pc.preciofinalprocesador).toFixed(2);
  } else if (ryzen5.checked) {
    pc.preciofinalprocesador = 149.6 * pc.valorDolar;
    let p = document.createElement("p");
    campoPresupuesto.appendChild(p);
    p.innerHTML =
      "Microprocesador AMD Ryzen 5 $" +
      parseFloat(pc.preciofinalprocesador).toFixed(2);
  } else if (ryzen7.checked) {
    pc.preciofinalprocesador = 243.7 * pc.valorDolar;
    let p = document.createElement("p");
    campoPresupuesto.appendChild(p);
    p.innerHTML =
      "Microprocesador AMD Ryzen 7 $" +
      parseFloat(pc.preciofinalprocesador).toFixed(2);
  } else if (ryzen9.checked) {
    pc.preciofinalprocesador = 700.78 * pc.valorDolar;
    let p = document.createElement("p");
    campoPresupuesto.appendChild(p);
    p.innerHTML =
      "Microprocesador AMD Ryzen 9 $" +
      parseFloat(pc.preciofinalprocesador).toFixed(2);
  }

  let ram16 = document.getElementById("RAM16");
  let ram32 = document.getElementById("RAM32");
  let ram64 = document.getElementById("RAM64");
  let ram128 = document.getElementById("RAM128");

  if (ram16.checked) {
    pc.preciofinalram = 55.11 * pc.valorDolar;
    let p = document.createElement("p");
    campoPresupuesto.appendChild(p);

    p.innerHTML =
      "Fury 16Gb Ddr4 3000Mhz " +
      "$" +
      parseFloat(pc.preciofinalram).toFixed(2);
  } else if (ram32.checked) {
    pc.preciofinalram = 149.21 * pc.valorDolar;
    let p = document.createElement("p");
    campoPresupuesto.appendChild(p);
    p.innerHTML =
      "Fury 32Gb Ddr4 3200Mhz " +
      "$" +
      parseFloat(pc.preciofinalram).toFixed(2);
  } else if (ram64.checked) {
    pc.preciofinalram = 353.61 * pc.valorDolar;
    let p = document.createElement("p");
    campoPresupuesto.appendChild(p);
    p.innerHTML =
      "Fury 64Gb Ddr4 3600Mhz " +
      "$" +
      parseFloat(pc.preciofinalram).toFixed(2);
  } else if (ram128.checked) {
    pc.preciofinalram = 409.21 * pc.valorDolar;
    let p = document.createElement("p");
    campoPresupuesto.appendChild(p);
    p.innerHTML =
      "Fury 128Gb Ddr5 128Gbz " +
      "$" +
      parseFloat(pc.preciofinalram).toFixed(2);
  }
  let hdd128 = document.getElementById("hdd128");
  let hhd256 = document.getElementById("hhd256");
  let hhd512 = document.getElementById("hhd512");
  let hhd1t = document.getElementById("hhd1t");

  if (hdd128.checked) {
    pc.preciofinaldisco = 19.45 * pc.valorDolar;
    let p = document.createElement("p");
    campoPresupuesto.appendChild(p);
    p.innerHTML =
      "Kingston Ssd 128Gb " + "$" + parseFloat(pc.preciofinaldisco).toFixed(2);
  } else if (hhd256.checked) {
    pc.preciofinaldisco = 30.62 * pc.valorDolar;
    let p = document.createElement("p");
    campoPresupuesto.appendChild(p);
    p.innerHTML =
      "Kingston Ssd 256Gb " + "$" + parseFloat(pc.preciofinaldisco).toFixed(2);
  } else if (hhd512.checked) {
    pc.preciofinaldisco = 34.7 * pc.valorDolar;
    let p = document.createElement("p");
    campoPresupuesto.appendChild(p);
    p.innerHTML =
      "Kingston Ssd 1Tb " + "$" + parseFloat(pc.preciofinaldisco).toFixed(2);
  } else if (hhd1t.checked) {
    pc.preciofinaldisco = 112.64 * pc.valorDolar;
    let p = document.createElement("p");
    campoPresupuesto.appendChild(p);
    p.innerHTML =
      "Kingston Ssd 512Gb " + "$" + parseFloat(pc.preciofinaldisco).toFixed(2);
  }

  let nvidia_xx1 = document.getElementById("NVidia_xx1");
  let nvidia_xx2 = document.getElementById("NVidia_xx2");
  let nvidia_xx3 = document.getElementById("NVidia_xx3");
  let nvidia_xx4 = document.getElementById("NVidia_xx4");

  if (nvidia_xx1.checked) {
    pc.preciofinalvideo = 391.94 * pc.valorDolar;
    let p = document.createElement("p");
    campoPresupuesto.appendChild(p);
    p.innerHTML =
      "Nvidia Xc Geforce RTX 2060 " +
      "$" +
      parseFloat(pc.preciofinalvideo).toFixed(2);
  } else if (nvidia_xx2.checked) {
    pc.preciofinalvideo = 352.98 * pc.valorDolar;
    let p = document.createElement("p");
    campoPresupuesto.appendChild(p);
    p.innerHTML =
      "Nvidia Xc Geforce MSI 2060 " +
      "$" +
      parseFloat(pc.preciofinalvideo).toFixed(2);
  } else if (nvidia_xx3.checked) {
    pc.preciofinalvideo = 295.86;
    let p = document.createElement("p");
    campoPresupuesto.appendChild(p);
    p.innerHTML =
      "Nvidia Xc Geforce RTX 1060 " +
      "$" +
      parseFloat(pc.preciofinalvideo).toFixed(2);
  } else if (nvidia_xx4.checked) {
    pc.preciofinalvideo = 480.31 * pc.valorDolar;
    let p = document.createElement("p");
    campoPresupuesto.appendChild(p);
    p.innerHTML =
      "Nvidia Xc GeForce GTX 3060 " +
      "$" +
      parseFloat(pc.preciofinalvideo).toFixed(2);
  }

  let Tecladogamer = document.getElementById("Tecladogamer");
  let Microfono = document.getElementById("Microfono");
  let Auriculares = document.getElementById("Auriculares");
  let Mouse = document.getElementById("Mouse");
  let Monitor = document.getElementById("Monitor");
  let Gabinete = document.getElementById("Gabinete");
  let Soporte = document.getElementById("Soporte");
  let Cable = document.getElementById("Cable");

  if (Tecladogamer.checked) {
    preciotacladogamer = 59.05 * pc.valorDolar;
    let p = document.createElement("p");
    campoPresupuesto.appendChild(p);
    p.innerHTML =
      "Teclado gamer Logitech Serie G G413 " +
      "$" +
      parseFloat(pc.preciotacladogamer).toFixed(2);
  }

  if (Microfono.checked) {
    pc.preciomicrofono = 93.37 * pc.valorDolar;
    let p = document.createElement("p");
    campoPresupuesto.appendChild(p);
    p.innerHTML =
      "Micrófono HyperX QuadCast " +
      "$" +
      parseFloat(pc.preciomicrofono).toFixed(2);
  }

  if (Auriculares.checked) {
    pc.precioauriculares = 108.26 * pc.valorDolar;
    let p = document.createElement("p");
    campoPresupuesto.appendChild(p);
    p.innerHTML =
      "Auriculares gamer Logitech Pro X negro " +
      "$" +
      parseFloat(pc.precioauriculares).toFixed(2);
  }

  if (Mouse.checked) {
    pc.preciomouse = 3.17 * pc.valorDolar;
    let p = document.createElement("p");
    campoPresupuesto.appendChild(p);
    p.innerHTML =
      "Accesorio Mouse Vsg Aquila " +
      "$" +
      parseFloat(pc.preciomouse).toFixed(2);
  }

  if (Monitor.checked) {
    pc.preciomonitor = 346.45 * pc.valorDolar;
    let p = document.createElement("p");
    campoPresupuesto.appendChild(p);
    p.innerHTML =
      "Smart Monitor M5 27 FHD con Smart TV " +
      "$" +
      parseFloat(pc.preciomonitor).toFixed(2);
  }

  if (Gabinete.checked) {
    pc.preciogabinete = 181.1 * pc.valorDolar;
    let p = document.createElement("p");
    campoPresupuesto.appendChild(p);
    p.innerHTML =
      "Gabinete Pc Gamer X-treme Warrior " +
      "$" +
      parseFloat(pc.preciogabinete).toFixed(2);
  }

  if (Soporte.checked) {
    pc.preciosoporte = 11.77 * pc.valorDolar;
    let p = document.createElement("p");
    campoPresupuesto.appendChild(p);
    p.innerHTML =
      "Soporte Cooler Indoor " + "$" + parseFloat(pc.preciosoporte).toFixed(2);
  }

  if (Cable.checked) {
    pc.preciocable = 59.96 * pc.valorDolar;
    let p = document.createElement("p");
    campoPresupuesto.appendChild(p);
    p.innerHTML =
      "Cable Modding Motherboard 24 Malla " +
      "$" +
      parseFloat(pc.preciocable).toFixed(2);
  }

  let publicarPrecio = document.getElementById("your-upgrade");
  let nroPresupuesto = document.getElementById("presupuesto_nro");

  publicarPrecio.innerHTML =
    " $" +
    parseInt(
      pc.preciofinalPC +
        pc.preciofinalprocesador +
        pc.preciofinaldisco +
        pc.preciofinalram +
        pc.preciofinalvideo +
        pc.precioauriculares +
        pc.preciocable +
        pc.preciogabinete +
        pc.preciomicrofono +
        pc.preciomonitor +
        pc.preciomouse +
        pc.preciosoporte
    );

  nroPresupuesto.innerHTML = parseInt(getRandomArbitrary(1000, 9999));

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
}

// API //

fetch("https://api.bluelytics.com.ar/v2/latest")
  .then((res) => res.json())
  .then((data) => {
    let identificador = document.getElementById("detalleDolar");
    identificador.innerHTML =
      data.oficial.value_sell + parseInt(data.oficial.value_sell * 0.65);

    pc.valorDolar =
      data.oficial.value_sell + parseInt(data.oficial.value_sell * 0.65);
  });

// UPGRADE //

let upgradeMicro = document.getElementById("btn-micro");
upgradeMicro.addEventListener("click", optionsMicro);

let upgradeRam = document.getElementById("btn-ram");
upgradeRam.addEventListener("click", optionsRam);

let upgradeStorage = document.getElementById("btn-storage");
upgradeStorage.addEventListener("click", optionsStorage);

let upgradeVideo = document.getElementById("btn-video");
upgradeVideo.addEventListener("click", optionsVideo);

document.getElementById("micros").style.display = "none";
document.getElementById("ram").style.display = "none";
document.getElementById("storage").style.display = "none";
document.getElementById("video").style.display = "none";

function optionsMicro() {
  document.getElementById("micros").style.display = "grid";
  document.getElementById("ram").style.display = "none";
  document.getElementById("storage").style.display = "none";
  document.getElementById("video").style.display = "none";
}

function optionsRam() {
  document.getElementById("ram").style.display = "grid";
  document.getElementById("micros").style.display = "none";
  document.getElementById("storage").style.display = "none";
  document.getElementById("video").style.display = "none";
}

function optionsStorage() {
  document.getElementById("storage").style.display = "grid";
  document.getElementById("micros").style.display = "none";
  document.getElementById("ram").style.display = "none";
  document.getElementById("video").style.display = "none";
}

function optionsVideo() {
  document.getElementById("video").style.display = "grid";
  document.getElementById("micros").style.display = "none";
  document.getElementById("ram").style.display = "none";
  document.getElementById("storage").style.display = "none";
}

// VALIDACIONES //

document.getElementById("error").style.display = "none";
document.getElementById("exito").style.display = "none";

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", enviarFormulario);

function enviarFormulario(evento) {
  evento.preventDefault();

  let nombre = document.getElementById("nombre");
  let apellido = document.getElementById("apellido");
  let telefono = document.getElementById("tel");
  let tipoconsulta = document.getElementById("tipoconsulta");
  let contacto = document.getElementById("contacto");
  let horario = document.getElementById("horario");
  let regularesEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

  if (nombre.value === "") {
  msjError = document.getElementById("error").style.display = "block";
  }

  else {
    document.getElementById("exito").style.display = "block";
    document.getElementById("error").style.display = "none";
  }

  if (apellido.value === "") {
    msjError = document.getElementById("error").style.display = "block";
  }

  else {
    document.getElementById("exito").style.display = "block";
    document.getElementById("error").style.display = "none";
  }

  if (telefono.value === "") {
    msjError = document.getElementById("error").style.display = "block";
  }

  else {
    document.getElementById("exito").style.display = "block";
    document.getElementById("error").style.display = "none";
  }

  if (!regularesEmail.test(email.value)) {
    msjError = document.getElementById("error").style.display = "block";
  }

  else {
    document.getElementById("exito").style.display = "block";
    document.getElementById("error").style.display = "none";
  }

  if (tipoconsulta.value == "" || contacto.value == "" || horario.value == "") {
    msjError = document.getElementById("error").style.display = "block";
  }

  else {
    document.getElementById("exito").style.display = "block";
    document.getElementById("error").style.display = "none";
  }
} 