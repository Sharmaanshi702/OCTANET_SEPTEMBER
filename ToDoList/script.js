const inputField = document.getElementById("input-Field");
const listContainer = document.getElementById("list-Container");

function addTask(){
if(inputField.value== ''){
    alert("You must write something!");
}
else{
    let li=document.createElement("li");
    li.innerHTML=inputField.value;
    listContainer.appendChild(li);
   let span = document.createElement("span");
   span.innerHTML= "\u00d7";
   li.appendChild(span);
}
inputField.value="";
saveInfo();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveInfo();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveInfo()
    }
}, false) 

function saveInfo(){
localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();