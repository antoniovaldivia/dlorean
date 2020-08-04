/* Popular Timelines */

const popularTimelinesGrid = document.getElementById('popularTimelinesGrid')
const popularEventsGrid = document.getElementById('popularEventsGrid')

const timelinesArray = [{
    title: 'Timeline 1',
    author: 'Author 1',
    description: 'Timeline description 1',
    image: 'image1.png',
    permalink: 'http://dlorean.co/dlorean/timeline/1',
    events: [
        { date: new Date(1901, 1, 1, 0, 0, 0, 0), title: "Event1 in Timeline 1", category: 'The Moon' },
        { date: new Date(1902, 2, 1, 0, 0, 0, 0), title: "Event2 Timeline 1" },
        { date: new Date(1911, 3, 1, 10, 33, 30, 0), title: "Event3 Timeline 1" },
        { date: new Date(1918, 11, 24, 11, 33, 30, 0), title: "Event4 Timeline 1" },
        { date: new Date(1918, 11, 24, 11, 33, 30, 0), title: "Event5 Timeline 1" },
        { date: new Date(1915, 4, 1, 0, 0, 0, 0), title: "Event6 Timeline 1" },
        { date: new Date(1926, 5, 1, 0, 0, 0, 0), title: "Event7 Timeline 1" }
    ]
}, {
    title: 'Timeline 2',
    author: 'Author 2',
    description: 'Timeline description 2',
    image: 'image2.png',
    permalink: 'http://dlorean.co/dlorean/timeline/2',
    events: [
        { date: new Date(1901, 1, 1, 0, 0, 0, 0), title: "Event1 in Timeline 2", category: 'The Moon' },
        { date: new Date(1902, 2, 1, 0, 0, 0, 0), title: "Event2 Timeline 2" },
        { date: new Date(1911, 3, 1, 10, 33, 30, 0), title: "Event3 Timeline 2" },
        { date: new Date(1918, 11, 24, 11, 33, 30, 0), title: "Event4 Timeline 2" },
        { date: new Date(1918, 11, 24, 11, 33, 30, 0), title: "Event5 Timeline 2" },
        { date: new Date(1915, 4, 1, 0, 0, 0, 0), title: "Event6 Timeline 2" },
        { date: new Date(1926, 5, 1, 0, 0, 0, 0), title: "Event7 Timeline 2" }
    ]
},
{
    title: 'Timeline 3',
    author: 'Author 3',
    description: 'Timeline description 3',
    image: 'image3.png',
    permalink: 'http://dlorean.co/dlorean/timeline/3',
    events: [
        { date: new Date(2001, 1, 1, 0, 0, 0, 0), title: "Event1 in Timeline 3", category: 'The Moon' },
        { date: new Date(1902, 2, 1, 0, 0, 0, 0), title: "Event2 Timeline 3" },
        { date: new Date(1911, 3, 1, 10, 33, 30, 0), title: "Event3 Timeline 3" },
        { date: new Date(1918, 11, 24, 11, 33, 30, 0), title: "Event4 Timeline 3" },
        { date: new Date(1918, 11, 24, 11, 33, 30, 0), title: "Event5 Timeline 3" },
        { date: new Date(1915, 4, 1, 0, 0, 0, 0), title: "Event6 Timeline 3" },
        { date: new Date(1926, 5, 1, 0, 0, 0, 0), title: "Event7 Timeline 3" }
    ]
}
];

const output = timelinesArray.map(({ title, author, description, image, permalink, events }) => {


    // -1 flip
    // 0 same
    // 1 same
    const eventsAr = [...events].sort((a, b) => a.date.getTime() - b.date.getTime())


    const first = eventsAr[0].date
    const last = eventsAr[eventsAr.length - 1].date
    const diffTime = Math.abs(first - last)
    const totalDaysBetween = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    // const $timeline = document.querySelector('.dynamic-timeline-line > ul')
    const $timeline = document.createElement('ul')

    eventsAr.forEach(e => {

        const daysFromStart = Math.ceil(Math.abs(e.date - first) / (1000 * 60 * 60 * 24))
        const percentOfLine = daysFromStart / totalDaysBetween

        const dot = document.createElement('li')
        $timeline.append(dot)
        dot.className = 'dynamic-timeline-line-dot'
        dot.id = `dot-${e.date.getFullYear()}-${e.date.getMonth()}-${e.date.getDate()}`
        dot.style.setProperty('--percent', percentOfLine)

        const time = document.createElement('time')
        dot.append(time)
        time.className = 'purple'
        time.setAttribute('timedate',  `${e.date.getFullYear()}-${e.date.getMonth()}-${e.date.getDate()}`)
        time.append(e.date.getFullYear())

    })

    return `
      <li>
      <article class="timeline-box box-shadow">
          <header>
              <ul class="timelines-header-grid">
                  <li class="timelines-header-grid-img">
                      <a href="timeline.html"><img src="img/demo/toronto.jpg"
                              alt="An image from 180 years of Toronto history"
                              class="timelines-header-grid-img-file"></a>
                  </li>
                  <li>
                      <a href="timeline.html"><h3>${title}</h3></a>
                      <p><span class="author-icon"></span>By <a href="#">${author}</a></p>
                  </li>
              </ul>
              <p class="timeline-description">${description}</p>

          </header>
          <ul class="dynamic-timeline purple-background">
              <li>
                  <div class="dynamic-timeline-line purple-line" id="tl-1">
                      ${$timeline.outerHTML}
                  </div>
              </li>
              <li>
                  <ul class="timelines-events-grid">
                      <li>
                      </li>

                  </ul>
              </li>
            </ul>
        </article>
        </li>
            `
}).join('');


popularTimelinesGrid.innerHTML = `${output}`;




/* The timeline dots code */

/*
window.addEventListener('load', event => {
    const first = timeline.events[0].date
    const last = timeline.events[timeline.events.length - 1].date
    const diffTime = Math.abs(first - last)
    const totalDaysBetween = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    const $timeline = document.querySelector('.dynamic-timeline-line > ul')
    const $eventgrid = document.querySelector('.the-timeline')
    $timeline.innerHTML = "" // cheating, fix this
    $eventgrid.innerHTML = ""
    timeline.events.forEach(e => {
 
        const daysFromStart = Math.ceil(Math.abs(e.date - first) / (1000 * 60 * 60 * 24))
        const percentOfLine = daysFromStart / totalDaysBetween
 
        const dot = document.createElement('li')
        $timeline.append(dot)
        dot.className = 'dynamic-timeline-line-dot'
        dot.id = `dot-${e.date.getFullYear()}-${e.date.getMonth()}-${e.date.getDate()}`
        dot.style.setProperty('--percent', percentOfLine)
 
        const time = document.createElement('time')
        dot.append(time)
        time.className = 'purple'
        time.setAttribute('timedate',  `${e.date.getFullYear()}-${e.date.getMonth()}-${e.date.getDate()}`)
        time.append(e.date.getFullYear())
 
        $eventgrid.innerHTML += getTimelineEventAsHtml(e)
 
 
    })
})

function getTimelineEventAsHtml(e) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    
if (!e.location) {
    e.location = "Location NA"
};
 
return `
<li class="the-timeline-item">
<article class="event box-shadow">
<ul class="the-timeline-events-grid">
    <li>
        <header class="timeline-event-header">
        <time class="purple" datetime="${e.date.getFullYear()}-${e.date.getMonth()}-${e.date.getDate()}">${months[e.date.getMonth()]} ${e.date.getDate()}, <em class="yearClass">${e.date.getFullYear()}</em></time>
            <a href="/${e.author}/event/${e.id}">
            <h2 class="eventHeader" id="${e.date.getFullYear()}-${e.date.getMonth()}-${e.date.getDate()}">${e.title}</h2>
            </a>
            <p><address><span class="location-icon"></span><a href="http://maps.google.com/?q=${e.location}" target="_blank">${e.location}</a></address></p>
            <p><span class="author-icon"></span>By <a href="/${e.author}" target="_blank">${e.author}</a></p>
        </header>
    </li>
    <li class="event-img">				
            <a href="/${e.author}/event/${e.id}">
                <img src="${e.image}"
                alt="An image of One Giant Leap For Mankind: The First Person on the Moon"></a>
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


/*
 
/* Popular Events */
const PopularEventsArray = [
    {
        title: 'Event 1',
        events: [
            {
                date: new Date(2015, 11, 21, 10, 33, 30, 0), 
                title: "Event Title 1",
                place: "Location 1"
            }
        ]
    },
    {
        title: 'Event 2',
        events: [
            {
                date: new Date(2018, 11, 21, 10, 33, 30, 0), 
                title: "Event Title 2",
                place: "Location 2"
            }
        ]
    },
    {
        title: 'Event 3',
        events: [
            {
                date: new Date(2018, 11, 21, 10, 33, 30, 0), 
                title: "Event Title 3",
                place: "Location 3"
            }
        ]
    },  
    {
        title: 'Event 4',
        events: [
            {
                date: new Date(2018, 11, 21, 10, 33, 30, 0), 
                title: "Event Title 4",
                place: "Location 4"
            },
        ]
    },  
    {
        title: 'Event 5',
        events: [
            {
                date: new Date(2018, 11, 21, 10, 33, 30, 0), 
                title: "Event Title 5",
                place: "Location 5"
            },
        ]
    },  
    {
        title: 'Event 6',
        events: [
            {
                date: new Date(2018, 11, 21, 10, 33, 30, 0), 
                title: "Event Title 6",
                place: "Location 6"
            },
        ]
    }
];

const eventsArray = PopularEventsArray.map(obj => obj.events[0]);
console.log(eventsArray);
const outputEvents = eventsArray.map(({ title, date, place }) => {
    return `
                                <article class="event">
                                    <ul class="events-grid">
                                        <li>
                                            <header class="event-header">
                                                <time class="purple" datetime="1969-07-20">Jul 20, <span>1969</span></time>
                                                <a href="#">
                                                    <h3>${title}</h3>
                                                </a>
                                                <address><span class="location-icon"></span>${place}</p>
                                                </address>
                                                <p><span class="watch-icon"></span> <a href="#">Lunar Timeline: Humanity’s
                                                        Exploration of
                                                        the Moon</a></p>
                                            </header>
                                        </li>
                                        <li class="event-img">
                                            <a href="#"><img src="img/demo/man-on-the-moon.jpg"
                                                    alt="An image of One Giant Leap For Mankind: The First Person on the Moon"></a>
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
                            </li>
              `
}).join('');

popularEventsGrid.innerHTML = `${outputEvents}`;
