const input = document.querySelector("#input");
const addbtn = document.querySelector("#add");
const list = document.querySelector("#list");
let storagearry= JSON.parse(localStorage.getItem("task")) ||[];
storagearry.forEach(task => {
  show(task);
});

// add eventlistener
addbtn.addEventListener("click",()=>{
const Texttask=input.value.trim();
if(Texttask==""){
  alert("enter task")
  return
}
storagearry.push(Texttask);
localStorage.setItem("task",JSON.stringify(storagearry))
show(Texttask)
input.value=""




})
// for show task
function show(task){
const listitem=document.createElement("li");
const delbtn =document.createElement("button");
listitem.innerText= task;
delbtn.innerText="delete";
delbtn.addEventListener("click",()=>{

listitem.remove();
storagearry = storagearry.filter(t => t !== task);
    localStorage.setItem("task", JSON.stringify(storagearry));

})


 listitem.appendChild(delbtn);
  list.appendChild(listitem);



}