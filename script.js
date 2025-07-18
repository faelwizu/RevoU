const taskInput = document.getElementById("taskInput");
const dateInput = document.getElementById("dateInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const deleteAllBtn = document.getElementById("deleteAllBtn");

let tasks = [];

function renderTasks() {
  taskList.innerHTML = "";
  if (tasks.length === 0) {
    taskList.innerHTML = `<tr><td colspan="4">No task found</td></tr>`;
    return;
  }

  tasks.forEach((task, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${task.text}</td>
      <td>${task.date}</td>
      <td>${task.completed ? "Completed" : "Pending"}</td>
      <td>
        <button onclick="toggleStatus(${index})">Toggle</button>
        <button onclick="deleteTask(${index})">Delete</button>
      </td>
    `;
    taskList.appendChild(row);
  });
}

function addTask() {
  const text = taskInput.value.trim();
  const date = dateInput.value;
  if (!text || !date) {
    alert("Please fill in both fields.");
    return;
  }

  tasks.push({ text, date, completed: false });
  taskInput.value = "";
  dateInput.value = "";
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function toggleStatus(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

addBtn.addEventListener("click", addTask);
deleteAllBtn.addEventListener("click", () => {
  tasks = [];
  renderTasks();
});

// Initial render
renderTasks();
