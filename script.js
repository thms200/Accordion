
let title = document.getElementsByClassName('title')
let title_Name = document.getElementsByClassName('title_Name')
let content = document.getElementsByClassName('content')
let arrow = document.getElementsByClassName('arrow-left')


for(let i = 0; i < title.length; i++) {
    
    title[i].addEventListener('click', function() {
        if(title[i].getAttribute("class") === 'title') {
            title[i].style.backgroundColor = "rgb(0, 62, 255)"
            title_Name[i].style.color= "white"
            content[i].style.transition = "1s"
            content[i].style.height = "200px"
            arrow[i].style.borderLeft = "5px solid transparent"
            arrow[i].style.borderRight = "5px solid transparent"
            arrow[i].style.borderTop = "5px solid white"
            title[i].setAttribute("class", "title click");
        } else {
            title[i].style.backgroundColor = "rgb(246, 246, 246)"
            title_Name[i].style.color= "black"
            content[i].style.transition = "1s"
            content[i].style.height = "0px"
            arrow[i].style.borderTop = "5px solid transparent"
            arrow[i].style.borderBottom = "5px solid transparent"
            arrow[i].style.borderLeft = "5px solid black"
            title[i].setAttribute("class", "title");
        }
    })
}

