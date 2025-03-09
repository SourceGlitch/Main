let taskInput = document.getElementById('taskInput');
let btn = document.getElementById('addBtn');
let todoList = document.getElementById('todo-list');
let completeTask = document.getElementById('completeTask')

//Adds task from Input
btn.addEventListener('click', () => {
    let li = document.createElement('li');
    li.innerText = taskInput.value.trim();
    todoList.appendChild(li);
    
    //Clear Input
    taskInput.value = '';

    //Complete button for Task
    let completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    todoList.appendChild(completeBtn);
    completeBtn.addEventListener('click', () => {
        todoList.removeChild(li);
        todoList.removeChild(completeBtn);
        
        //Completed List task
        completeTask.appendChild(li);
        completeTask.appendChild(deleteBtn);       
    })

    //Delete Button for Completed Task
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        completeTask.removeChild(li);
        completeTask.removeChild(deleteBtn);
    })


    
    
        
});



