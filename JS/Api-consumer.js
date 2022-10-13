fetch('https://api.bluelytics.com.ar/v2/latest')

    .then(res => res.json()) 
    .then(data => {
        let identificador = document.getElementById('detalleDolar');
        identificador.innerHTML = data.oficial.value_sell
})

