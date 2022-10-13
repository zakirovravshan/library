let elList = document.querySelector('.books__list')
let selName = document.querySelector('.book__name')
let selPage = document.querySelector('.book__page')
let sellang = document.querySelector('.book__lang')
let selYear = document.querySelector('.book__year')
let elInp = document.querySelector('.header__inp')

let Select = document.querySelector('select')

function domRender(array, node) {
    books.forEach((book) => {

        function capitalize(s) {
            return s[0].toUpperCase() + s.slice(1);
        }
        var year = "Year : "
        var lang = "Language : "
        var page = "Pages : "
        var author = "Author : "
        var src = "./images/"
        var newItem = document.createElement('li')
        newItem.classList.add('list__item')
        var elTitle = document.createElement('h3')
        var elImg = document.createElement('img')
        elImg.classList.add("item__img")
        var elPage = document.createElement('p')
        var elAuthor = document.createElement('p')
        var elYear = document.createElement('p')
        var elLang = document.createElement('p')
        var elLink = document.createElement('a')
        elLink.classList.add('item__link')
        var elSpan = document.createElement('span')

        elTitle.textContent = capitalize(book.title)
        elImg.src = src + book.imageLink
        elPage.textContent = page + book.pages
        elAuthor.textContent = author + book.author
        elYear.textContent = year + book.year
        elLang.textContent = lang + book.language
        elLink.href = book.link
        elLink.innerText = 'About book'

        elList.appendChild(newItem)
        newItem.appendChild(elSpan)
        elSpan.appendChild(elImg)
        newItem.appendChild(elTitle)
        newItem.appendChild(elAuthor)
        newItem.appendChild(elPage)
        newItem.appendChild(elYear)
        newItem.appendChild(elLang)
        newItem.appendChild(elLink)



    })


}
domRender(books, elList);

selName.addEventListener('change', function () {
    let newArr = []
    elList.innerHTML = ""
    var selVal = selName.value
    if (selVal == 'A to Z') {
        newArr = books.sort((a, b) => {
            return a.title.charCodeAt(0) - b.title.charCodeAt(0)
        })
    }
    if (selVal == 'Z to A') {
        newArr = books.sort((a, b) => {
            return b.title.charCodeAt(0) - a.title.charCodeAt(0)
        })
    }
    domRender(newArr, elList)

})


selYear.addEventListener('change', function () {
    let newArr = []
    elList.innerHTML = ""
    var selVal = selYear.value
    if (selVal == '1') {
        newArr = books.sort((a, b) => {
            return a.year - b.year
        })
    }
    if (selVal == '2022') {
        newArr = books.sort((a, b) => {
            return b.year - a.year
        })
    }
    domRender(newArr, elList)

})


selPage.addEventListener('change', function () {
    let newArr = []
    elList.innerHTML = ""
    var selVal = selPage.value
    if (selVal == 'less') {
        newArr = books.sort((a, b) => {
            return a.pages - b.pages
        })
    }
    if (selVal == 'more') {
        newArr = books.sort((a, b) => {
            return b.pages - a.pages
        })
    }
    domRender(newArr, elList)

})

sellang.addEventListener('change', function () {
    let newArr = []
    elList.innerHTML = ""
    var selVal = sellang.value
    if (selVal == 'A to Z') {
        newArr = books.sort((a, b) => {
            return a.language.charCodeAt(0) - b.language.charCodeAt(0)
        })
    }
    if (selVal == 'Z to A') {
        newArr = books.sort((a, b) => {
            return b.language.charCodeAt(0) - a.language.charCodeAt(0)
        })
    }
    domRender(newArr, elList)

})







