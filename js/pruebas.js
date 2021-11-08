function prueba () {
    

$.get(`hhttps://datosabiertos-usig-apis.buenosaires.gob.ar/geocoder/2.2/geocoding?cod_calle1=Bahia%20Blanca&cod_calle2=Av.%20Avellaneda`, (res) => {
        
    console.log(res)})
}

prueba()


    /*
fetch(`https://www.google.com/maps/@?api=1&map_action=map&parameters `)
    .then((response) => console.log(response))
*/
