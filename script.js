
let first = document.getElementsByClassName('first')
let section = document.getElementsByClassName('section')
let content = document.getElementsByClassName('content')
let arrow = document.getElementsByClassName('arrow-left')


for(let i = 0; i < first.length; i++) {
    
    first[i].addEventListener('click', function() {
        if(first[i].getAttribute("class") === 'first') {
            first[i].style.backgroundColor = "rgb(0, 62, 255)"
            section[i].style.color= "white"
            content[i].style.transition = "1s"
            content[i].style.height = "200px"
            arrow[i].style.borderLeft = "5px solid transparent"
            arrow[i].style.borderRight = "5px solid transparent"
            arrow[i].style.borderTop = "5px solid white"
            first[i].setAttribute("class", "first click");
        } else {
            first[i].style.backgroundColor = "rgb(246, 246, 246)"
            section[i].style.color= "black"
            content[i].style.transition = "1s"
            content[i].style.height = "0px"
            arrow[i].style.borderTop = "5px solid transparent"
            arrow[i].style.borderBottom = "5px solid transparent"
            arrow[i].style.borderLeft = "5px solid black"
            first[i].setAttribute("class", "first");
        }
    })
}

