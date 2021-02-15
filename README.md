# Single page app - Check out your favorite songs from your favorite Artist!


![image](https://raw.githubusercontent.com/RowinRuizendaal/web-app-from-scratch-2021/master/assets/documentation/home.jpg)

![image](https://raw.githubusercontent.com/RowinRuizendaal/web-app-from-scratch-2021/master/assets/documentation/teaser.png)


[Live demo](https://rowinruizendaal.github.io/web-app-from-scratch-2021/)


## Description

I made a single page app for music lovers in which I used the Rapid API (Deezer) API, this allows me to take a look at the current songs of an artist. 


## What can you do with this web app?

For now the meaning of this webapp is that you can pick any highlighted artist, after you find an artisist of your choice you can see their songs in a carousel, discovering new songs that you might never heared from your favorite artist. (discoverability)


## What does this app need to be a perfect app from now on?

Maybe a search field where people can search on their favorite artist instead of having the choise from a few,
like feature (?)




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

## How many request are allowed?

I couldn't find any information about the maxium request each hour/day, the API will timeout for some times if the api is getting called to many times, these timeout are not rate limits since you are able to fetch data within seconds after it.


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