const addBtn = document.getElementById("add-button");
const taskEntry = document.getElementById("task-entry");
const deleteBtn = document.getElementById("delete");
const editBtn = document.getElementById("edit");

const taskBtn = document.querySelectorAll(".task-button");
  taskBtn.forEach(btn => {
  btn.style.display = "none";
});

//Add function for To Do List btn
const addTask = () => {
  if (taskEntry.value.trim() !== "") {
    showBtn();
    appendTask();
  } else {
    alert("Please Enter Task.");
  }
};

//Append task from input element
const appendTask = () => {
  const div = document.createElement("div");
  const checkbox = document.createElement("input");
  const label = document.createElement("label");
  const task = document.getElementById("task");
  
  div.id = "list-container";
  div.className = "wrapper task-item";
  const uniqueId = Date.now()
  checkbox.id = "checkbox";
  checkbox.type = "checkbox";
  label.id = "task-name";
  label.setAttribute("for", checkbox);
  label.textContent = taskEntry.value.trim();

  task.appendChild(div);
  div.appendChild(checkbox);
  div.appendChild(label);
  taskEntry.value = "";
  
  //strike throught/change color of task when selected
  const selectCheckbox = document.getElementById("checkbox");
  selectCheckbox.addEventListener("change", () => {
    if(selectCheckbox.checked) {
      label.style.textDecoration = "line-through";
      label.style.color = "#808080";
      deleteBtn.addEventListener("click", delTask);
      editBtn.addEventListener("click", editTask);
    } else {
      label.style.textDecoration = "none";
      label.style.color = "black";
      label.setAttribute("contenteditable", "false");
    }
  });
  
  //Delete Task when btn is clicked
  const delTask = () => {
    label.style.display = "none";
    checkbox.style.display = "none";
}
  
  //Edit task when btn is clicked
  const editTask = () => {
    label.setAttribute("contenteditable", "true");
    label.style.color = "black";
    label.style.textDecoration = "none";
  }
};


//show edit and delete btn
const showBtn = () => {
  const taskBtn = document.querySelectorAll(".task-button");
  taskBtn.forEach(btn => {
  btn.style.display = "inline";
});
}

addBtn.addEventListener("click", addTask);
