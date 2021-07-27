function navegarViaAjax(url, seletor, push = true) {
    if(!url || !seletor) return
    const elemento = document.querySelector(seletor)
    fetch(url)
        .then(resp => resp.text())
        .then(html => {
            elemento.innerHTML = html
            if(push) {
                const cleanUrl = url.split('/')[1]
                history.pushState({ seletor }, null, cleanUrl)
            }
        })
}

document.querySelectorAll('[ex-link]').forEach(link => {
    const url = link.attributes['ex-link'].value
    const seletorDestino = link.attributes['ex-destino'].value

    link.onclick = e => {
        e.preventDefault()
        navegarViaAjax(url, seletorDestino)
    }
})

window.onpopstate = e => {
    if(e.state) {
        navegarViaAjax(window.location.href, e.state.seletor, false)
    }
}