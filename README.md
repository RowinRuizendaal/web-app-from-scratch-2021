# Single page app - Check out your favorite songs from your favorite Artist!


![image](https://raw.githubusercontent.com/RowinRuizendaal/web-app-from-scratch-2021/master/assets/documentation/home.jpg)

![image](https://raw.githubusercontent.com/RowinRuizendaal/web-app-from-scratch-2021/master/assets/documentation/teaser.png)


[Live demo](https://rowinruizendaal.github.io/web-app-from-scratch-2021/)


## Description

I made a single page app for music lovers in which I used the Rapid API (Deezer) API, this allows me to take a look at the current songs of an artist. 


## Actor diagram

![actor](https://raw.githubusercontent.com/RowinRuizendaal/web-app-from-scratch-2021/master/assets/documentation/Actor.png)

## Interaction diagram

![actor](https://raw.githubusercontent.com/RowinRuizendaal/web-app-from-scratch-2021/master/assets/documentation/Interaction.png)


## What is the Rapid deezer API?

What is an API? Application programming interfaces (APIs) helps to make data available for extern users. In this way, you can request data to use it in different applications.

[The Rapid Deezer API](https://rapidapi.com/deezerdevs/api/deezer-1):

    - Search on artist
    - Search on album.
    - Get comments
    - Get Genre
    - Get Artist
    - Get Ediorial
    - Get Playlist
    - Get Track
    - Get Radio
    - Get Infos

## How to fetch data from the Rapid Deezer API?

```js
    const baseUrl = 'https://deezerdevs-deezer.p.rapidapi.com/'
    const endpoint = `search?q=${artist}`

    const dataset = await fetch(`${baseUrl}${endpoint}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "API_KEY",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
        }
    })
    const json = await dataset.json()
    return json


```