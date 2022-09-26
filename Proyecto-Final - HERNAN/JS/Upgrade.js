let upgradeMicro = document.getElementById("btn-micro");
upgradeMicro.addEventListener("click", optionsMicro);

let upgradeRam = document.getElementById("btn-ram");
upgradeRam.addEventListener("click", optionsRam);

let upgradeStorage = document.getElementById("btn-storage");
upgradeStorage.addEventListener("click", optionsStorage);

let upgradeVideo = document.getElementById("btn-video");
upgradeVideo.addEventListener("click", optionsVideo);

document.getElementById('micros').style.display = 'none';
document.getElementById('ram').style.display = 'none';
document.getElementById('storage').style.display = 'none';
document.getElementById('video').style.display = 'none';

function optionsMicro() {
    document.getElementById('micros').style.display = 'grid';
    document.getElementById('ram').style.display = 'none';
    document.getElementById('storage').style.display = 'none';
    document.getElementById('video').style.display = 'none';
}

function optionsRam() {
    document.getElementById('ram').style.display = 'grid';
    document.getElementById('micros').style.display = 'none';
    document.getElementById('storage').style.display = 'none';
    document.getElementById('video').style.display = 'none';
}

function optionsStorage() {
    document.getElementById('storage').style.display = 'grid';
    document.getElementById('micros').style.display = 'none';
    document.getElementById('ram').style.display = 'none';
    document.getElementById('video').style.display = 'none';
}

function optionsVideo() {
    document.getElementById('video').style.display = 'grid';
    document.getElementById('micros').style.display = 'none';
    document.getElementById('ram').style.display = 'none';
    document.getElementById('storage').style.display = 'none';
}
