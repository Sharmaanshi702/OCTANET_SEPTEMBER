const inputField = document.getElementById("input-Field");
const listContainer = document.getElementById("list-Container");
const datePicker=document.getElementById("DatePicker");

function addTask(){
if(inputField.value== ''){
    alert("You must write some Task to be added!!");
}
else{
    let li=document.createElement("li");
    li.innerHTML=inputField.value;
    listContainer.appendChild(li);
   let span = document.createElement("span");
   span.innerHTML= "\u00d7";
   li.appendChild(span);
}
inputField.value= "";
saveInfo();
}


function addDate(){
    if(datePicker.value== ''){
        alert("You must set a deadline!!");
    }
    else{
        let date=document.createElement("");
       date.innerHTML=datePicker.value;
        datePicker.appendChild(date);
       let span = document.createElement("span");
       span.innerHTML= "\u00d7";
       li.appendChild(span);
    }
    inputField.value= "";
    saveInfo();
    }

listContainer.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("selected");
        saveInfo();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveInfo()
    }
}, false) 

// listContainer.addEventListener("click", function(e){
//     if(e.target.tagName==="DATE"){
//         e.target.classList.toggle("selected");
//         saveInfo();
//     }
//     else if(e.target.tagName==="SPAN"){
//         e.target.parentElement.remove();
//         saveInfo()
//     }
// }, false) 

function saveInfo(){
localStorage.setItem("data", listContainer.innerHTML);
// localStorage.setItem("data", datePicker.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
//   datePicker.innerHTML = localStorage.getItem("data");
}
showTask();