function task1() 
{
    let task = document.getElementById("task");
    let t=task.value.trim();
    let taskText = document.createElement("span")
    taskText.appendChild(document.createTextNode(" "+t));
    if (taskText === "") return;
    let taskContainer = document.getElementById("task-container");
    let taskItem = document.createElement("div");
    let label = document.createElement("label");
    label.className="label-class";
    let cb = document.createElement("input");
    cb.type = "checkbox";
    cb.className="checkbox-style";
    cb.onchange=function()
    {
        if(cb.checked)
        {
            taskText.style.textDecoration="line-Through";
            taskText.style.color="grey";
        }
        else
        {
            taskText.style.textDecoration="none";
            taskText.style.color="black";
        }

    };  
    let button=document.createElement("button");
    button.textContent="X";
    button.className = "delete-btn";
    button.onclick=function()
    {
        if(cb.checked)
        taskContainer.removeChild(taskItem);
        else
            alert("please select task before delete");
    };
    label.appendChild(cb);
    label.appendChild(taskText);
    label.appendChild(button);
    taskItem.appendChild(label);
    taskContainer.appendChild(taskItem);
    
    task.value = "";
}