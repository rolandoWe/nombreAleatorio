let nombre=document.querySelector(".nombre");
let generar=document.querySelector(".generar");

function generador(){
    let nombres=["Carlos","Miguel","Chepe","Maria","Raquel","Josefa","Julio","Dorlen","Manuel","Pedro","Marta","Juana","Maria","Ana","Rolando","Douglas","Duglas","Alberto"]
    for(let n=0;n<nombres.length;n++){
    let contar=Math.round(Math.random()*n)

        nombre.innerHTML=nombres[contar]

    }
}
generar.addEventListener("click",()=>{
    generador()
})

