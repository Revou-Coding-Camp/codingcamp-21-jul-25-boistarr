let tasks = [];

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  if (tasks.length === 0) {
    taskList.innerHTML = `<tr><td colspan="4">No task found</td></tr>`;
    return;
  }

  tasks.forEach((task, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${task.name}</td>
      <td>${task.date}</td>
      <td>${task.completed ? "Done" : "Pending"}</td>
      <td>
        <button onclick="toggleStatus(${index})">Toggle</button>
        <button onclick="deleteTask(${index})">Delete</button>
      </td>
    `;
    taskList.appendChild(row);
  });
}

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const dateInput = document.getElementById("dateInput");

  if (!taskInput.value.trim()) return;

  tasks.push({
    name: taskInput.value.trim(),
    date: dateInput.value,
    completed: false
  });

  taskInput.value = "";
  dateInput.value = "";

  renderTasks();
}

function toggleStatus(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function deleteAll() {
  tasks = [];
  renderTasks();
}

function filterTasks() {
  // Example filter: only show pending tasks
  const filtered = tasks.filter(t => !t.completed);
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  if (filtered.length === 0) {
    taskList.innerHTML = `<tr><td colspan="4">No task found</td></tr>`;
    return;
  }

  filtered.forEach((task, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${task.name}</td>
      <td>${task.date}</td>
      <td>${task.completed ? "Done" : "Pending"}</td>
      <td>
        <button onclick="toggleStatus(${index})">Toggle</button>
        <button onclick="deleteTask(${index})">Delete</button>
      </td>
    `;
    taskList.appendChild(row);
  });
}

renderTasks();
