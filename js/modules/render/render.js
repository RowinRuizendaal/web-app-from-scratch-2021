import {
    createElement
} from '../utils/createElements.js'


import { genre } from '../genre/genre.js'

// Global scope
let timeout = null;
const container = document.querySelector('.app')

const render = {
    genre(json) {

        const absolutediv = createElement('div', 'absolutediv')

        const heading = createElement('h2', 'overview-header')
        heading.innerHTML = 'Featured artists'

        // Make the search field as input
        const form = createElement('form', 'form')
        const label = createElement('label', 'label')
        const input = createElement('input', 'input')
        input.placeholder = 'Search on any artist of your choice'


        // Set an event on search with a timeout
        input.addEventListener('keyup', (e) => {
            e.preventDefault();

            clearTimeout(timeout);
            timeout = setTimeout(() => {
                genre(input.value)
            }, 1000);
        })
        const childContainer = createElement('div', 'container margin')

        container.appendChild(absolutediv)
        absolutediv.appendChild(heading)
        container.appendChild(childContainer)
        absolutediv.appendChild(form)
        form.appendChild(label)
        label.appendChild(input)


        for (let i of json) {
            if (i.name != null || i.name != undefined) {
                const overview = `
            <article class="container">
            <a href='#artist/${i.name}'
            <div class="container">
            <div class="box">
              <div class="imgBx">
                <img src="${i.picture_medium}" alt="${i.picture_medium}">
              </div>
              <div class="content">
                <div>
                  <h2>${i.name}</h2>
                  <p>${i.type}</p>
                </div>
              </div>
            </div>
            </a>
            </article>
            </section>`

                childContainer.insertAdjacentHTML('beforeend', overview)
            }
        }
    },
    carousel(data) {

        // Change container name for swiper functionality
        container.className = 'app swiper-section'

        // create the back button within the section
        let backButton = createElement('a', 'go-back')
        backButton.appendChild(document.createTextNode("Go back"))
        backButton.href = `#overview`;

        // Make div
        let swipercontainer = createElement('div', 'swiper-container')

        // Make div
        let swiperwrapper = createElement('div', 'swiper-wrapper')

        // Append the backbutton
        container.appendChild(backButton)

        //append the swiper container
        container.appendChild(swipercontainer)

        // Child container for swiperwrapper
        const childContainerWrapper = swipercontainer.appendChild(swiperwrapper)

        for (let i of data) {
            const overview =
                `<article class="swiper-slide">
                <div class="player">
                    <div class="imgBx">
                    <img src="${i.album.cover_medium}" alt="${i.artist.name}">
                    <audio controls>
                    <source src="${i.preview}" type="audio/mp3">
                    <source src="${i.preview}" type="audio/mpeg">
                    Your browser does not support the audio element.
                    </audio>
                        <div class="text__overlay">
                        <h3>${i.title}</h3>
                        <p>${i.artist.name}</p>
                    </div>
                </div>
            </div>
            </article>
            </section>`

            childContainerWrapper.insertAdjacentHTML('beforeend', overview)
        }

        const swiper = new Swiper(".swiper-container", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2,
                slideShadows: true
            },
            loop: true,
        });
    }
}

export {
    render
}