export function createElement(type, className) {

    let create = document.createElement(type)
    create.className = className

    if (type === 'input') {
        const label = createElement('label')
        create.setAttribute('type', 'text')

        label.appendChild(create)
    }

    return create
}