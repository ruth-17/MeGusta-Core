

/*contador primer boton*/
let contador1 = 0;
let contarLikes1 = document.querySelector('.btn1');
let likes1 = document.querySelector("#like1");

function likeOne(){
        contador1 ++;
        likes1.textContent = contador1;
}

/*contador segundo boton*/
let contador2 = 0;
let contarLikes2 = document.querySelector('.btn2');
let likes2 = document.querySelector("#like2");

function likeTwo(){
    contador2 ++;
    likes2.textContent = contador2;
}

/*contador tercer boton*/
let contador3 = 0;
let contarLikes3 = document.querySelector('.btn3');
let likes3 = document.querySelector("#like3");

function likeThree(){
    contador3 ++;
    likes3.textContent = contador3;
}
