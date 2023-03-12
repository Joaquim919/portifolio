let menuVisivel = false;
//FUNCAO QUE OCULTA O MENU
function mostrarOcultarMenu(){
    if(menuVisivel){
        document.getElementById("nav").classList ="";
        menuVisivel = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisivel = true;
    }
}

function selecionar(){
    //OCULTAR O MENU UMA VEZ QUE SELECIONO UMA OPCAO
    document.getElementById("nav").classList = "";
    menuVisivel = false;
}
//FUNCAO QUE APLICA AS ANIMACOES DAS HABILIDADES
function efeitoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("CSharp");
        habilidades[3].classList.add("PHP");
        habilidades[4].classList.add("Comunicacao");
        habilidades[5].classList.add("Agilidade");
        habilidades[6].classList.add("Criatividade");
        habilidades[7].classList.add("Aprendizado");
    }
}


//DETECÇAO PARA APLICAR ANIMACAO NA BARRA DE HABILIDADES 
window.onscroll = function(){
    efeitoHabilidades();
}
