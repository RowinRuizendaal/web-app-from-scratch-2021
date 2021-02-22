export function createElement(type, className) {

    let create = document.createElement(type)

    if (className === '') {
        create.className = ''
    } else {
        create.className = className
    }

    if (type === 'input') {
        create.setAttribute('type', 'text')
    }


    return create
}