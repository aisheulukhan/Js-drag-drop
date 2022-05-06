
let alma = document.getElementById("alma");
let armud = document.getElementById("armud");
let ciyelek = document.getElementById("ciyelek");
let biber = document.getElementById("biber");
let kok = document.getElementById("kok");
let pomidor = document.getElementById("pomidor");

var dragItem = null;

alma.addEventListener("dragstart",function(e){
    e.dataTransfer.setData("fruitsId",this.id);
})
armud.addEventListener("dragstart",function(e){
    e.dataTransfer.setData("fruitsId",this.id);
})

ciyelek.addEventListener("dragstart",function(e){
    e.dataTransfer.setData("fruitsId",this.id);
})

document.querySelectorAll(".fruits").forEach(area => {
    area.addEventListener("dragover",function(e){
        e.preventDefault();
    })    
})
document.querySelectorAll(".fruits").forEach(area=>{
    area.addEventListener("drop",function(e){
        let data = e.dataTransfer.getData("fruitsId");
        this.appendChild(document.getElementById(data));
    })
})

biber.addEventListener("dragstart",function(e){
    e.dataTransfer.setData("vegetablesId",this.id);
})
kok.addEventListener("dragstart",function(e){
    e.dataTransfer.setData("vegetablesId",this.id);
})
pomidor.addEventListener("dragstart",function(e){
    e.dataTransfer.setData("vegetablesId",this.id);
})


document.querySelectorAll(".vegetables").forEach(area => {
    area.addEventListener("dragover",function(e){
        e.preventDefault();
    })    
})


document.querySelectorAll(".vegetables").forEach(area=>{
    area.addEventListener("drop",function(e){
        let data = e.dataTransfer.getData("vegetablesId");
        this.appendChild(document.getElementById(data));
    })
})

function Drop(){
    this.append(dragItem);
}



