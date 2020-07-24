const timeline1 = {
    title: 'hello world',
    events: [
        {date: new Date(2001, 1, 1, 0, 0, 0 ,0), title: "Blah blah", category: 'The Moon'},
        {date: new Date(2002, 2, 1, 0, 0, 0 ,0), title: "Blah blah"},
        {date: new Date(2011, 3, 1, 10, 33, 30, 0), title: "Blah blah"},
        {date: new Date(2018, 11, 24, 11, 33, 30, 0), title: "Blah blah"},
        {date: new Date(2018, 11, 24, 11, 33, 30, 0), title: "Blah blah"},
        {date: new Date(2015, 4, 1, 0, 0, 0 ,0), title: "Blah blah"},
        {date: new Date(2026, 5, 1, 0, 0, 0 ,0), title: "Blah blah"}
    ]
}

window.addEventListener('load', event => {
    const first = timeline1.events[0].date
    const last = timeline1.events[timeline1.events.length - 1].date
    const diffTime = Math.abs(first - last)
    const totalDaysBetween = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    const $timeline1 = document.getElementById('tl-1')
    $timeline1.innerHTML = "" // cheating, fix this
    timeline1.events.forEach(e => {

        const daysFromStart = Math.ceil(Math.abs(e.date - first) / (1000 * 60 * 60 * 24))
        const percentOfLine = daysFromStart / totalDaysBetween

        const dot = document.createElement('li')
        $timeline1.append(dot)
        dot.className = 'dynamic-timeline-line-dot'
        dot.id = `dot-${e.date.getFullYear()}-${e.date.getMonth()}-${e.date.getDate()}`
        dot.style.setProperty('--percent', percentOfLine)

        const time = document.createElement('time')
        dot.append(time)
        time.className = 'purple'
        time.setAttribute('timedate',  `${e.date.getFullYear()}-${e.date.getMonth()}-${e.date.getDate()}`)
        time.append(e.date.getFullYear())



    })
})

const timeline2 = {
    title: 'hello world',
    events: [
        {date: new Date(2000, 1, 1, 0, 0, 0 ,0), title: "Blah blah", category: 'The Moon'},
        {date: new Date(2002, 9, 1, 0, 0, 0 ,0), title: "Blah blah"},
        {date: new Date(2012, 3, 1, 10, 33, 30, 0), title: "Blah blah"},
        {date: new Date(2022, 11, 24, 11, 33, 30, 0), title: "Blah blah"},
        {date: new Date(2032, 4, 1, 0, 0, 0 ,0), title: "Blah blah"},
        {date: new Date(2034, 5, 1, 0, 0, 0 ,0), title: "Blah blah"}
    ]
}

window.addEventListener('load', event => {
    const first = timeline2.events[0].date
    const last = timeline2.events[timeline2.events.length - 1].date
    const diffTime = Math.abs(first - last)
    const totalDaysBetween = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    const $timeline2 = document.getElementById('tl-2')
    $timeline2.innerHTML = "" // cheating, fix this
    timeline2.events.forEach(e => {

        const daysFromStart = Math.ceil(Math.abs(e.date - first) / (1000 * 60 * 60 * 24))
        const percentOfLine = daysFromStart / totalDaysBetween

        const dot = document.createElement('li')
        $timeline2.append(dot)
        dot.className = 'dynamic-timeline-line-dot'
        dot.id = `dot-${e.date.getFullYear()}-${e.date.getMonth()}-${e.date.getDate()}`
        dot.style.setProperty('--percent', percentOfLine)

        const time = document.createElement('time')
        dot.append(time)
        time.className = 'purple'
        time.setAttribute('timedate',  `${e.date.getFullYear()}-${e.date.getMonth()}-${e.date.getDate()}`)
        time.append(e.date.getFullYear())



    })
})

const timeline3 = {
    title: 'hello world',
    events: [
        {date: new Date(2001, 1, 1, 0, 0, 0 ,0), title: "Blah blah", category: 'The Moon'},
        {date: new Date(2018, 11, 24, 11, 33, 30, 0), title: "Blah blah"},
        {date: new Date(2020, 5, 1, 0, 0, 0 ,0), title: "Blah blah"}
    ]
}

window.addEventListener('load', event => {
    const first = timeline3.events[0].date
    const last = timeline3.events[timeline3.events.length - 1].date
    const diffTime = Math.abs(first - last)
    const totalDaysBetween = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    const $timeline3 = document.getElementById('tl-3')
    $timeline3.innerHTML = "" // cheating, fix this
    timeline3.events.forEach(e => {

        const daysFromStart = Math.ceil(Math.abs(e.date - first) / (1000 * 60 * 60 * 24))
        const percentOfLine = daysFromStart / totalDaysBetween

        const dot = document.createElement('li')
        $timeline3.append(dot)
        dot.className = 'dynamic-timeline-line-dot'
        dot.id = `dot-${e.date.getFullYear()}-${e.date.getMonth()}-${e.date.getDate()}`
        dot.style.setProperty('--percent', percentOfLine)

        const time = document.createElement('time')
        dot.append(time)
        time.className = 'purple'
        time.setAttribute('timedate',  `${e.date.getFullYear()}-${e.date.getMonth()}-${e.date.getDate()}`)
        time.append(e.date.getFullYear())



    })
})