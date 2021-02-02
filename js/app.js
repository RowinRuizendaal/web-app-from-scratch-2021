//Fetch method
const fetchData = async (artist) => {
    console.log(artist)
    const dataset = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${artist}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "56c070c431msh87cecd16dfd06bep144257jsn65aaddc013a9",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
        }
    })
    const json = await dataset.json()
    return json
}




const carousel = async () => {
    const artist = 'michael jackson'
    const json = await fetchData(artist);
    const data = json.data

    const container = document.querySelector('.swiper-wrapper')
    const results = document.querySelector('.results h3').textContent = `${data.length} results for ${artist}`


    for (i = 0; i < data.length; i++) {

        container.innerHTML += 
        `<div class="swiper-slide">
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
        </div>`
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

carousel()