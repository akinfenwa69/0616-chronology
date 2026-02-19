function fetchData() {
    fetch("./data.json")
        .then(response => response.json())
        .then(data => { addItems(data) })
}

function addItems(data) {
    data.map((item, index) => {
        const ul = document.getElementById('myUL')
        const li = document.createElement('li')
        const date = document.createElement('p')
        const title = document.createElement('h2')
        const description = document.createElement('p')
        const icon = document.createElement('i')
        const dot = document.createElement('span')
        const list = document.createElement('ul')

        li.classList = "relative w-1/2 py-3 px-6 flex flex-col gap-2 rounded-lg odd:items-end odd:text-right even:translate-x-full odd:[&_span]:-right-1 even:[&_span]:-left-1"

        date.textContent = item.date
        date.classList = "text-xs text-gray-300"

        icon.setAttribute("data-lucide", item.icon)
        icon.classList = "size-9 mb-3"

        title.textContent = item.title
        title.classList = "text-2xl font-medium"

        description.textContent = item.description
        description.classList = "text-gray-300"

        list.classList = "text-gray-300 list-disc mx-6"
        index % 2 === 0 ? list.setAttribute("dir", "rtl") : null

        item.list ? item.list.map(line => {
            let list_item = document.createElement('li')
            list_item.textContent = line
            list.appendChild(list_item)
        }) : null

        dot.classList = "w-2 h-2 rounded-full bg-white absolute top-1/2"

        if (item.icon) li.appendChild(icon)
        li.appendChild(date)
        li.appendChild(title)
        if (item.description) li.appendChild(description)
        if (item.list) li.appendChild(list)
        li.appendChild(dot)
        ul.appendChild(li)
    })

    lucide.createIcons()
}
