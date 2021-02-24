export function formatData(array) {

    return array.map((el) => {
        return {
            id: el.artist.id,
            name: el.artist.name,
            picture_medium: el.artist.picture_medium,
            type: el.type
        }
    })
}