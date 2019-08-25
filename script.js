
let title = document.getElementsByClassName('title')
let title_Name = document.getElementsByClassName('title_Name')
let content = document.getElementsByClassName('content')
let arrow = document.getElementsByClassName('arrow-left')


for(let i = 0; i < title.length; i++) {
    
    title[i].addEventListener('click', function(event) {
         event.currentTarget.classList.toggle("title_click")
         event.currentTarget.classList.toggle("title")
         event.currentTarget.firstElementChild.classList.toggle("arrow-down")
         event.currentTarget.firstElementChild.classList.toggle("arrow-left")
         event.currentTarget.lastElementChild.classList.toggle("title_Name_changeColor")
         event.currentTarget.nextElementSibling.classList.toggle("content_change")
    })
}

