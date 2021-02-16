import { config } from './config.js'

//Fetch method
export async function fetchData(endpoint) {

    const dataset = await fetch(`${config.baseUrl}${endpoint}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": `${config.key}`,
            "x-rapidapi-host": `${config.host}`
        }
    })
    const json = await dataset.json()
    return json
}