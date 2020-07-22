let firstYear = "1834";
let lastYear = "1920";
let $progress = document.querySelector('.progress')
let $h1 = document.getElementById('heading')
let $titleBar = document.querySelector('.titleBar')
let title = document.querySelector('h1').textContent
let years = document.getElementsByClassName('year');

const timeline = {
    title: 'hello world',
    events: [
        {date: new Date(2001, 3, 1), title: "Blah blah", category: 'The Moon'},
        {date: new Date(2002, 3, 1), title: "Blah blah"},
        {date: new Date(2011, 3, 1), title: "Blah blah"},
        {date: new Date(2015, 3, 1), title: "Blah blah"},
        {date: new Date(2026, 3, 1), title: "Blah blah"}
    ]
}

/* const first = timeline.events[0].date
const last = timeline.events[events.length - 1].date
const totalDaysBetween = // difference between last and first

timeline.events.forEach(e => {

    const daysFromStart = // e.date - first

    const percentOfLine = daysFromStart / totalDayBetween
    const dot = document.createElement('span')
    document.querySelector('.dynamicTimelineLine').append(dot)
    dot.className = 'dot'
    dot.style.setAttribute('--percent', p)
    
})
 */

window.addEventListener('load', event => {
    const first = timeline.events[0].date
    const last = timeline.events[timeline.events.length - 1].date
    const diffTime = Math.abs(first - last)
    const totalDaysBetween = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    const $timeline = document.querySelector('.dynamic-timeline-line > ul')
    const $eventgrid = document.querySelector('.display-events-grid')
    $timeline.innerHTML = "" // cheating, fix this
    $eventgrid.innerHTML = ""
    // Create fragment

    timeline.events.forEach(e => {

        const daysFromStart = Math.ceil(Math.abs(e.date - first) / (1000 * 60 * 60 * 24))
        const percentOfLine = daysFromStart / totalDaysBetween

        const dot = document.createElement('li')
        $timeline.append(dot)
        dot.className = 'dynamic-timeline-line-dot'
        dot.style.setProperty('--percent', percentOfLine)

        const time = document.createElement('time')
        dot.append(time)
        time.className = 'purple'
        time.setAttribute('timedate',  `${e.date.getFullYear()}-${e.date.getMonth()}-${e.date.getDate()}`)
        time.append(e.date.getFullYear())

        $eventgrid.innerHTML += getTimelineEventAsHtml(e)

    })
})

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



function getTimelineEventAsHtml(e) {
    const months = ['Jan', 'F', 'M', "A", "M", "J", "J"]

return `
<li>
    <article class="event">
        <ul class="events-grid text-align-right">
            <li><span class="events-grid-dot align-right-dot"></span><em class="events-grid-dot-line align-right-line"></em>
                <header class="event-header">
                    <time class="purple" datetime="${e.date.getFullYear()}-${e.date.getMonth()}-${e.date.getDate()}">${months[e.date.getMonth()]} ${e.date.getDate()}, <span id="1834" class="year" style="background-color: red;">${e.date.getFullYear()}</span></time>
                    <a href="#">
                        <h2>${e.title}</h2>
                    </a>
                    <address><span class="location-icon"></span>${e.category}</address>
                    <p><span class="author-icon"></span>By <a href="#">ctvnews</a></p>
                </header>
            </li>
            <li class="event-img">
                <a href="#"><img src="img/demo/man-on-the-moon.jpg" alt="An image of One Giant Leap For Mankind: The First Person on the Moon"></a>
            </li>
            <li>
                <footer>
                    <ul class="event-interactions-grid">
                        <li>
                            <p>Likes</p>
                        </li>
                        <li>
                            <p>Comments</p>
                        </li>
                    </ul>
                </footer>
            </li>
        </ul>
    </article>
</li>`
}


    
