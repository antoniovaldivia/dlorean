let firstYear = "1834";
let lastYear = "1920";
let $progress = document.querySelector('.progress')
let $h1 = document.getElementById('heading')
let $titleBar = document.querySelector('.titleBar')
let title = document.querySelector('h1').textContent
let years = document.getElementsByClassName('year');

window.addEventListener('scroll', event => {
    let windowH = window.innerHeight
    let documentH = document.documentElement.scrollHeight
    let amtScrolled = window.scrollY
    let ttlAvailable = documentH - windowH
    let percent = amtScrolled / ttlAvailable
    $progress.style.width = `${percent * 100}%`

    let h1Top = $h1.offsetTop
    let h1Height = $h1.clientHeight
    console.log(h1Top, h1Height, amtScrolled)

    if (amtScrolled > h1Top + h1Height) {
        console.log('H1 is off the top')
        $titleBar.classList.add(`show`)
        $progress.classList.remove(`hide`)
        $titleBar.innerHTML = `${title}`;

    } else {
        $titleBar.classList.remove(`show`)
        $progress.classList.add(`hide`)
        $titleBar.innerHTML = ``;
    }

})

    for(i in years){
        years[i].style.backgroundColor = "red"
    }

