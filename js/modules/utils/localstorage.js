export function checkStorage(artist) {
    const getItem = localStorage.getItem(artist)
    if (getItem) {
        return getItem
    }
}

export function setStorage(artist, value) {
    const setItem = localStorage.setItem(`${artist}`, JSON.stringify(value))
    return setItem;
}