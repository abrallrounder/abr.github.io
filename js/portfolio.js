// typing

const text=[

"Learner",

"Explorer",

"Overthinker",

"Taciturn",

"Philophile",

"Hopeless Romantic",

"Very Friendly"

];

let count=0;
let index=0;
let current="";
let letter="";

(function type(){

if(count===text.length){

count=0;

}

current=text[count];

letter=
current.slice(
0,
++index
);

document
.querySelector(".typing")
.innerHTML=letter;


if(
letter.length===
current.length
){

count++;

index=0;

setTimeout(
type,
1000
);

}else{

setTimeout(
type,
100
);

}

})();




// scroll animation

const observer=
new IntersectionObserver(
(entries)=>{

entries.forEach(
(entry)=>{

if(
entry.isIntersecting
){

entry.target
.classList
.add("show");

}

});

}
);

const hidden=
document.querySelectorAll(
".hidden"
);

hidden.forEach(
(el)=>
observer.observe(el)
);




// mouse glow

document
.addEventListener(
"mousemove",
(e)=>{

const glow=
document.querySelector(
".cursor-glow"
);

glow.style.left=
e.clientX+"px";

glow.style.top=
e.clientY+"px";

}
);

document.addEventListener(
"mousemove",
(e)=>{

const glow=
document.querySelector(
".cursor-glow"
);

glow.style.left=
e.clientX+"px";

glow.style.top=
e.clientY+"px";

});
