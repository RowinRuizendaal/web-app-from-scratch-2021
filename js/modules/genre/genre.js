import { fetchData } from '../api/fetch.js'
import { clearElement } from '../clearElement/clearElement.js'


export async function genre() {
    const container = document.querySelector('.app')
    const number = 1;
    const max = 25;
    const fallbackImage = '../../../assets/images/fallback-cover.jpg'

    let childContainer = document.createElement('div')
    childContainer.className = 'container margin'
    const secondcontainer = container.appendChild(childContainer)

    // APi doesnt support get all artist so have to loop through them
    for (let i = number; i < max; i++) {
        const json = await fetchData(`/artist/${i}`)

        //todo 
        if (json.name === undefined) {
            console.log(typeof json)
            // json.splice(i, i)
        }
    
        if (json.picture_medium === undefined ) {
            json.picture_medium = fallbackImage
        }



        childContainer.innerHTML +=
        `
        <div class="container">
        <a href='#artist/${json.name}'
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
        </a>
        </div>
        </section>`
    }
}