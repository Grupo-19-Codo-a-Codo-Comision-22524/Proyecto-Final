fetch('https://api.bluelytics.com.ar/v2/latest')

    .then(res => res.json()) 
    .then(data => {
        let identificador = document.getElementById('');
        identificador.innerHTML = data.oficial.value_sell + '</br>' + data.blue.value_sell
})