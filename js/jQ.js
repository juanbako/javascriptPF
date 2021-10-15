function errorFormulario () {
    $(`#errorVisible`).removeClass(`errorAlert`)
    $(`#errorVisible`).addClass(`visible`)

    $(`#btnError`).click(() => {
        $(`#errorVisible`).removeClass(`visible`)
        $(`#errorVisible`).addClass(`errorAlert`)
    })
}
