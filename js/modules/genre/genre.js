import { fetchData } from '../api/fetch.js'
import { clearElement } from '../clearElement/clearElement.js'


export async function genre() {
    // clearElement('.swiper-section')
    const container = document.querySelector('.container')
    const number = 1;
    const max = 19;


    // APi doesnt support get all artist so have to loop through them
    for (let i = number; i < max; i++) {
        const json = await fetchData(`/artist/${i}`)

        if (json.name === undefined) {
            console.log(typeof json)
            // json.splice(i, i)
        }
    
        if (json.picture_medium === undefined ) {
            json.picture_medium = '../../../assets/images/fallback-cover.jpg'
        }

        container.innerHTML +=
        `<a href='#artist/${json.name}'
        <div class="container">
        <div class="box">
          <div class="imgBx">
            <img src="${json.picture_medium}" alt="${json.picture_medium}">
          </div>
          <div class="content">
            <div>
              <h2>${json.name}</h2>
              <p>${json.type}</p>
            </div>
          </div>
        </div>
        </a>`
    }
}