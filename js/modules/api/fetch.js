import { config } from './config.js'

//Fetch method
export async function fetchData(endpoint) {
    return await fetch(`${config.baseUrl}/${endpoint}`, {
            'method': 'GET',
            'headers': {
                "x-rapidapi-key": "ff8ef55de8mshfad902f9af1f571p1dcdcejsn4cbc8ca8c238",
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
            }
        })
        .then((response) => response.json())
        .catch((err) => console.log(err))
}