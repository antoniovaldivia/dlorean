let $h1 = document.getElementById('heading')
let $titleBar = document.querySelector('.titleBar')
let title = document.querySelector('h1').textContent

window.addEventListener('scroll', event => {
    let title = document.querySelector('h1').textContent
    let windowH = window.innerHeight
    let documentH = document.documentElement.scrollHeight
    let amtScrolled = window.scrollY
    let ttlAvailable = documentH - windowH
    let percent = amtScrolled / ttlAvailable
    let h1Top = $h1.offsetTop
    let h1Height = $h1.clientHeight
    console.log(h1Top, h1Height, amtScrolled)

    if (amtScrolled > h1Top + h1Height) {
        $titleBar.classList.add(`show`)
        $titleBar.innerHTML = `${title}`;

    } else {
        $titleBar.classList.remove(`show`)
        $titleBar.innerHTML = ``;
    }
})
