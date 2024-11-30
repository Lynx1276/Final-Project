function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var div = document.createElement("div");
        div.className = "task-item";
        
        var radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "tasks";
        radio.onclick = function() {
            div.classList.toggle("highlight");
        };
        div.appendChild(radio);
        
        var taskText = document.createElement("span");
        taskText.textContent = taskInput.value;
        taskText.className = "task-text";
        div.appendChild(taskText);

        var deleteButton = document.createElement("span");
        deleteButton.className = "delete";
        deleteButton.textContent = "❌";
        deleteButton.onclick = function () {
            taskList.removeChild(div);
        };
        div.appendChild(deleteButton);

        taskList.appendChild(div);

        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}


