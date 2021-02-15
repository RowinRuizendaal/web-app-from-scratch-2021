const container = document.querySelector('.app')
const fallbackImage = '../../../assets/images/fallback-cover.jpg'

const render = {
    genre(json) {
        console.log(typeof json)
        let childContainer = document.createElement('div')
        childContainer.className = 'container margin'
        const secondcontainer = container.appendChild(childContainer)



        for (let i of json) {
            // todo 
            if (i.name === undefined) {
                console.log(typeof json)
                    // json.splice(i, i)
            }

            if (i.picture_medium === undefined) {
                i.picture_medium = fallbackImage
            }

            const overview = `
            <div class="container">
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
            </div>
            </section>`

            childContainer.insertAdjacentHTML('beforeend', overview)
        }
    },
    carousel(data) {

        let backButton = document.createElement('a')
        backButton.className = 'go-back'
        backButton.appendChild(document.createTextNode("Go back"))
            // Bugged for now need a new solution
        backButton.href = `${window.location.origin}/index.html#overview`;

        container.className = 'swiper-section'

        let swipercontainer = document.createElement('div')
        swipercontainer.className = 'swiper-container'

        let swiperwrapper = document.createElement('div')
        swiperwrapper.className = 'swiper-wrapper'


        container.appendChild(backButton)
        const secondcontainer = container.appendChild(swipercontainer)
        const secondcontainer2 = swipercontainer.appendChild(swiperwrapper)

        const dataIndex = data[0]

        for (let i = 0; i < dataIndex.length; i++) {

            const overview =
                `<div class="swiper-slide">
                    <div class="player">
                        <div class="imgBx">
                        <img src="${dataIndex[i].album.cover_medium}" alt="${dataIndex[i].artist.name}">
                        <audio controls>
                        <source src="${dataIndex[i].preview}" type="audio/mp3">
                        <source src="${dataIndex[i].preview}" type="audio/mpeg">
                        Your browser does not support the audio element.
                        </audio>
                            <div class="text__overlay">
                            <h3>${dataIndex[i].title}</h3>
                            <p>${dataIndex[i].artist.name}</p>
                        </div>
                    </div>
                </div>
                </div>
                </section>`

            secondcontainer2.insertAdjacentHTML('beforeend', overview)
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