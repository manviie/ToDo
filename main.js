document.getElementById("btn").addEventListener("click", addTask) 

let tasks=[];

function addTask(){
    var li=document.createElement("li");
    li.setAttribute("id","item");
    var inputText=document.getElementById('task').value;
    var text = document.createTextNode(inputText);
    li.appendChild(text);
    tasks.push(text);
    document.getElementById("list").appendChild(li);

    document.getElementById("task").value = "";

    const span = document.createElement("span");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    span.addEventListener("click",()=>{
        li.remove();
    })
}


