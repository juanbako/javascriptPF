function errorFormulario () {
    $(`#errorVisible`).removeClass(`errorAlert`)
    $(`#errorVisible`).addClass(`visible`)

    $(`#errorVisible`).animate({
                        "width": "350",
                        "height": "200"}, 500)
                    .delay(100)
                    .fadeOut(1500)
                    .fadeIn(500)
                    .animate({
                        "width": "300",
                        "height": "150"}, 500)
}

function cerrarError () {
    $(`#btnError`).click(() => {
        $(`#errorVisible`).removeClass(`visible`)
        $(`#errorVisible`).addClass(`errorAlert`)
    })
}

espacios = [];

espacios.push(new MoldeParque ("Avellaneda", "Av. Directorio y Av. Lacarra", "Mataderos", "publico", 10, "si", "si", "no", "si", "no"));
espacios.push(new MoldeParque ("Plaza Velez Sarfield", "Bahia Blanca y Av. Avellaneda", "Floresta", "publico", 1, "si", "si", "no", "si", "no"));
espacios.push(new MoldeParque ("Plaza Arenales", "Chivilcoy y Nueva York", "Devoto", "publico", 4, "si", "si", "no", "no", "no"));
espacios.push(new MoldeParque ("Agronomia", "Av. San Martin y Nogoya", "Agronomía", "publico", 16, "si", "si", "si", "si", "si"));
espacios.push(new MoldeParque ("Parque Lezama", "Av. Martin Garcia y Av. Paseo Colon", "La Boca", "publico", 5, "si", "si", "si", "no", "no"));
espacios.push(new MoldeParque ("Jardin Japones", "Av. del Libertador y Av. Casares", "Palermo", "privado", 12, "no", "no", "si", "si", "no"));

espaciosFilt = espacios.filter(espacio => {
    for (let key in filter) {
        if (item[key] === undefined || item[key] != filter[key])
        return false;
    }
    return true;
});

console.log(users)

/*
users= users.filter(item => {
    for (let key in filter) {
      if (item[key] === undefined || item[key] != filter[key])
        return false;
    }
    return true;
  });
  
  console.log(users)*/