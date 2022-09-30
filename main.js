const icon = document.querySelectorAll('#boton')
const span = document.querySelectorAll('span')

function todosIconos(){
    const changeIcon=(id)=>{
        boton[id].classList.toggle('active')
        botom = boton[id]

        if (botom.classList.contains('active')) {
            botom.setAttribute('name', 'checkmark-circle-outline');
            botom.style.color = '#39eb39'
            span.style = 'color: #39eb39'
        }else{
            botom.setAttribute('name', 'ellipse-outline');
            botom.style.color = 'white'
            span.style = 'color: red'
        }
    }
    
    icon.forEach((boton, id)=>{
        boton.addEventListener('click', ()=>{
            changeIcon(id)
        })
    })
}

todosIconos()