const lista = document.querySelector(".lista");
const input = document.getElementById("input");
const btnAgregar = document.querySelector(".plus");

btnAgregar.addEventListener("click", () => {
  const inputTexto = input.value;
  if (inputTexto !== "" && inputTexto.length < 45) {
    const li = document.createElement("li");
    li.className = 'animate__animated animate__fadeInDown animate__faster'
    const texto = document.createElement("p");
    texto.className = 'texto'
    texto.textContent = inputTexto;
    lista.appendChild(li);
    li.appendChild(tacharTarea());
    li.appendChild(texto);
    li.appendChild(Eliminar())
    input.value = "";
  }
});

const Eliminar = ()=>{
    const btnEliminar = document.createElement("ion-icon");
    btnEliminar.setAttribute("name", "trash-outline");
  
    btnEliminar.addEventListener('click', ()=>{
        const item = btnEliminar.parentElement;
        item.setAttribute('class', 'animate__animated animate__fadeOutUp')
        console.log(item);
        lista.removeChild(item)
    })
    return btnEliminar
}

const tacharTarea =()=>{
    const check = document.createElement("ion-icon");
    check.setAttribute("name", "ellipse-outline");
    check.className = 'check'
    check.addEventListener('click', ()=>{
        check.classList.toggle('active')

        if (check.classList.contains('active')) {
            check.setAttribute('name', 'checkmark-circle-outline')
            check.style = 'color: #3DD23D'
        }else{
            check.setAttribute('name', 'ellipse-outline')
            check.style = 'color: white'
        }
    })
    return check
}