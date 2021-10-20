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
