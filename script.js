function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskValue = taskInput.value.trim(); // Trim to remove any extra spaces

  if (taskValue === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `${taskValue} <button onclick="removeTask(this)">Remove</button>`;

  document.getElementById("taskList").appendChild(li);

  taskInput.value = " ";
}

function removeTask(taskElement) {
  const li = taskElement.parentElement;
  li.remove();
}
