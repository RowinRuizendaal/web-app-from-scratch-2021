//Fetch method
export async function fetchData(artist) {
    const baseUrl = 'https://deezerdevs-deezer.p.rapidapi.com/'
    const endpoint = `search?q=${artist}`

    const dataset = await fetch(`${baseUrl}${endpoint}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "0bf95748e9msh3d8c1e1ba2eef5bp183a41jsn1cd34e72e142",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
        }
    })
    const json = await dataset.json()
    return json
}