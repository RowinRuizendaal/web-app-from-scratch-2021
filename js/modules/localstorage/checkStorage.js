

export function checkStorage(artist) {
    const getItem = localStorage.getItem(artist)
    if (getItem) {
        return getItem
    } 
}

export function setStorage(artist, test) {
    const setItem = localStorage.setItem(`${artist}`, JSON.stringify(test))
    return setItem;
}