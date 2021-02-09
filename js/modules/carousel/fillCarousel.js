import { fetchData } from '../api/fetch.js'
import { checkStorage, setStorage } from '../localstorage/checkStorage.js'
import { clearElement } from '../clearElement/clearElement.js'


let data

export async function carousel(artist) {
    clearElement('.app')
    const searchArtist = artist

    if (checkStorage(artist)) {
        data = JSON.parse(localStorage.getItem(`${artist}`))
    } else {
        const json = await fetchData(`search?q=${artist}`)
        data = json.data
        setStorage(artist, data)
    }


    const container = document.querySelector('.app')
    container.className = 'swiper-section'

    let swipercontainer = document.createElement('div')
    swipercontainer.className = 'swiper-container'

    let swiperwrapper = document.createElement('div')
    swiperwrapper.className = 'swiper-wrapper'



    const secondcontainer = container.appendChild(swipercontainer)
    const secondcontainer2 = swipercontainer.appendChild(swiperwrapper)


    // const results = document.querySelector('.results h3').textContent = `${data.length} results for ${artist}`


    for (let i = 0; i < data.length; i++) {

        secondcontainer2.innerHTML += 
        `   <div class="swiper-slide">
            <div class="player">
                <div class="imgBx">
                <img src="${data[i].album.cover_medium}" alt="${data[i].artist.name}">
                <audio controls>
                <source src="${data[i].preview}" type="audio/mp3">
                <source src="${data[i].preview}" type="audio/mpeg">
                Your browser does not support the audio element.
                </audio>
                    <div class="text__overlay">
                    <h3>${data[i].title}</h3>
                    <p>${data[i].artist.name}</p>
                </div>
            </div>
        </div>
        </div>
        </section>`
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
