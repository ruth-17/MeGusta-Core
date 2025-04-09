let contador = 1;

/*contador primer boton*/
let contarLikes1 = document.querySelector('.btn1');
let likes1 = document.querySelector("#like1");
contarLikes1.addEventListener("click",function(){
    let sumaLikes = Number(likes1.textContent);
    likes1.textContent = sumaLikes + contador;
});

/*contador segundo boton*/
let contarLikes2 = document.querySelector('.btn2');
let likes2 = document.querySelector("#like2");
contarLikes2.addEventListener("click",function(){
    let sumaLikes = Number(likes2.textContent);
    likes2.textContent = sumaLikes + contador;
});

/*contador tercer boton*/
let contarLikes3 = document.querySelector('.btn3');
let likes3 = document.querySelector("#like3");
contarLikes3.addEventListener("click",function(){
    let sumaLikes = Number(likes3.textContent);
    likes3.textContent = sumaLikes + contador;
});

