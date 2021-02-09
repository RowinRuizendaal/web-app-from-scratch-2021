//Fetch method
export async function fetchData(endpoint1) {
    const baseUrl = 'https://deezerdevs-deezer.p.rapidapi.com/'
    const endpoint = endpoint1
    const apikey = '0bf95748e9msh3d8c1e1ba2eef5bp183a41jsn1cd34e72e142'

    const dataset = await fetch(`${baseUrl}${endpoint}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": `${apikey}`,
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
        }
    })
    const json = await dataset.json()
    return json
}