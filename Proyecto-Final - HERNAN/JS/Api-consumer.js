/*

fetch('https://api.thecatapi.com/v1/images/search') // El metodo fetch devuelve una promesa
    .then(res => res.json()) // Convertimos la respuesta en algo que JS entienda (un JSON)
    .then(data => { // Llamamos la segunda promesa (El JSON) mediante un then como en el primer caso
        
        const img = document.querySelector('img'); // manipulamos el DOM para insertar la imagen
        img.src = data[0].url; // el src es igual al elemento 0 del array data, de ahi le pido traiga el atributo url 

        let identificador = document.getElementById('identificador')
        identificador.innerHTML = '<h2>' + data[0].id; + '</h2>'

    });

    */

// NOTAS AL MARGEN

/* res es el termino por convencion que se le da en el callback a la promesa devuelta por el fetch para convertirla en un Objeto (JSON) */
/* data es el temrino por convencion que se le da al array devuelto por una API */


fetch('https://api.bluelytics.com.ar/v2/latest')
    .then(res => res.json()) 
    .then(data => {
        let identificador = document.getElementById('identificador')
        identificador.innerHTML = '<h1> Valor dolar oficial - venta ' + data.oficial.value_sell + 
                                  '<h1> Valor dolar blue - venta ' + data.blue.value_sell + '</h1>';
    })
