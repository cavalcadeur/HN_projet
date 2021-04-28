"use strict";

// Le fichier start s'occupe d'initialiser le jeu et rien d'autre
// Il contient donc toutes les déclarations de variables ainsi que la fonction start(), resize(), rnd(), animation(), precharge() et charge()

let W,H;
let ctx,canvas;
let ctx2, canvas2;
let fond;
let mouse = [0,0];
let pattern;
const scale = 0.35;
const matrix = new DOMMatrix([scale, 0, 0, scale, 0, 0]);
let initialPosY = 0;

// programme

function rnd(max){
    // Sert à retourner un nombre aléatoire entre 0 et la max
    return Math.floor(Math.floor(Math.random()*max));
}

function charge(){
    // S'occupe de charger les images qui seront en cache en permanence quand cette fonction à finit, elle appelle animation() En général on appelle cette fonction qu'au tout début du jeu parce que toutes les images que l'on charge vont servir durant toute la durée d'une session de jeu. Le chargement des images spécifiques est fait ailleurs.
    fond = new Image();
    fond.src = "main_bouton.png";
    fond.onload = animation;
}

function start(){
    // Toute première fonction à être appellée, elle s'occupe d'initialiser le script puis lance la fonction charge()
    canvas = document.querySelector("#canvas");
    ctx = canvas.getContext("2d");
    W = canvas.width;
    H = canvas.height;
    ctx.imageSmoothingEnabled = true;
    initialPosY = 0;
    document.addEventListener(
        "mouseup",
        function (event){
            
        }
    );
    document.addEventListener(
        "mousedown",
        function(evt) {
            
        }
    );
    document.addEventListener(
        "mousemove",
        function (event){
            mouse[1] = event.clientX;
            mouse[0] = event.clientY;
        }
    );
    charge();
}

function animation(){
    // C'est la boucle principale du site. Elle sert à redistribuer les rôles entre toutes les fonctions d'affichage
    canvas.setAttribute("width",951);
    canvas.setAttribute("height",681);
    ctx2 = canvas.getContext("2d");
    pattern = ctx2.createPattern(fond, 'repeat');
    canvas.setAttribute("width",W);
    canvas.setAttribute("height",H);
    //pattern.setTransform(matrix);
    let f = function(t) {
        paint(t);
        window.requestAnimationFrame(f);
    };
    window.requestAnimationFrame(f);
}

function paint(t){
    ctx.fillStyle = pattern;
    //pattern.setTransform(matrix.translate(0,(- canvas.getBoundingClientRect().y + initialPosY) * 0.3));
    //ctx.createPattern(fond,"repeat");
    //ctx.fillStyle = "rgb(0,0,0)";
    ctx.beginPath();
    
    ctx.fillRect(0,0,W,H);
    
}

