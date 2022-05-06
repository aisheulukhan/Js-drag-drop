// var dropTarget = document.querySelector(".wrapper");
// var draggables =  document.querySelector(".foto");

// for (let i = 0; i < draggables.length; i++) {
//     draggables[i].addEventListener("dragstart",function(ev){
//         ev.dataTransfer.setData("srcId",ev.target.id)
//     });
// }

// dropTarget.addEventListener("dragover",function(ev){
//     ev.preventDefault();
// });

// dropTarget.addEventListener("drop",function(ev){
//     ev.preventDefault();
//     let target = ev.target;
//     let srcId = ev.dataTransfer.getData("srcId");

//     let droppable = target.classList.contains("box");
//     if (droppable) {
        
//         target.appendChild(document.getElementById(srcId));
//     }

// });

var p = document.getElementsByTagName('p');
var choice = document.getElementsByClassName('choice');

var dragItem = null;

for(var i of p){
    i.addEventListener('dragstart',dragStart);
    i.addEventListener('dragend',dragEnd);
}

function dragStart(){
    dragItem =  this;
    setTimeout(()=> this.style.display = "none",0);
}
function dragEnd(){
    setTimeout(()=> this.style.display = "block",0);
    dragItem =  null;
}

for(j of choice){
    j.addEventListener('dragover',dragOver);
    j.addEventListener('dragenter',dragEnter);
    j.addEventListener('dragleave',dragLeave);
    j.addEventListener('drop',Drop);
}

function Drop(){
    this.append(dragItem);
}

function dragOver(e){
    e.preventDefault();
    this.style.border = "2px dotted cyan"
}

function dragEnter(e){
    e.preventDefault();
}

function dragLeave(){
    this.style.border = "none"
}

