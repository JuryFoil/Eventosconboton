let boton = document.querySelector(".botonClick");
boton.addEventListener('click', () => {
    console.log("Dio click en el boton");
    // boton.classList.toggle(".click2");
    document.body.style.backgroundColor = "Black";
});

boton.addEventListener("mouseover", () => {
    console.log("Estas dentro del boton");
});


boton.addEventListener("mouseout", () =>{
    console.log("Estas fuera del boton");
})
window.addEventListener("keydown", () =>{
    console.log("pulso una tecla");
    console.log("pulsaste la tecla: " + String.fromCharCode(event.keyCode));
})

window.addEventListener("keypress", () =>{
    console.log("presiono una tecla");
})

// window.addEventListener("onload", () =>{
//     console.log("Se cargo la pagina");
// })

window.onload = () =>{
    console.log("Se cargo la pagina");
}
// window.addEventListener("keyup", () =>{
//     console.log(" una tecla");
// })


// function ponerColorBody() {
//    let pantalla=document.body;
//    pantalla.style.backgroundColor="blue";
// };