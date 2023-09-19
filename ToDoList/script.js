const input_Field = document.getElementById("inputField");
const list_Container = document.getElementById("listContainer");

function addTask(){
if(input_Field.value== ''){
    alert("You must write something!");
}
else{
    let li=document.createElement("li");
    li.innerHTML=input_Field.value;
    list_Container.appendChild(li);
   let span = document.createElement("span");
   span.innerHTML= "\u00d7";
   li.appendChild(span);
}
input_Field.value="";
}

list_Container.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
}, false) 