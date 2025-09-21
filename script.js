

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    function saveTasks() {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function renderTasks() {
      const taskList = document.getElementById("taskList");
      taskList.innerHTML = "";
      tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
          <span>${task}</span>
          <div>
            <button class="editBtn" onclick="editTask(${index})">Edit</button>
            <button class="deleteBtn" onclick="deleteTask(${index})">Delete</button>
          </div>
        `;
        taskList.appendChild(li);
      });
    }

    function addTask() {
      const input = document.getElementById("taskInput");
      if (input.value.trim() !== "") {
        tasks.push(input.value.trim());
        input.value = "";
        saveTasks();
        renderTasks();
      }
    }

    function editTask(index) {
      const newTask = prompt("Edit your task:", tasks[index]);
      if (newTask !== null && newTask.trim() !== "") {
        tasks[index] = newTask.trim();
        saveTasks();
        renderTasks();
      }
    }

    function deleteTask(index) {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    }

    // Render tasks on page load
    renderTasks();
 

