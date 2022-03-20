let nombre=document.querySelector(".nombre");
let generar=document.querySelector(".generar");

function generador(){
    let nombres=["Carlos","Miguel","José","Maria","Raquel","Josefa","Julio","Dorlen","Manuel","Pedro","Marta","Juana","Maria","Ana","Rolando","Douglas","Duglas","Alberto"]
    let apellidos=["Rivera","Saborio","Mendez","Peña","Sousa","Hernández","Aráujo","Sandoval","Artavia","Muños","Moura","Murillo","Sotelo","Fernández","Pereira","Ortiz","Torres","Bravo"]
    for(let n=0;n<nombres.length;n++){
        let contar=Math.round(Math.random()*n)
        for(let a=0;a<apellidos.length;a++){
            let contarA=Math.round(Math.random()*a)
        
            nombre.innerHTML=nombres[contar] +" "+ apellidos[contarA]
        
            }
    }

}
generar.addEventListener("click",()=>{
    generador()
})

