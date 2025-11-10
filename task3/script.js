function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskValue = taskInput.value.trim();

  if (taskValue === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskValue;

  const date = document.createElement("span");
  const now = new Date();
  date.textContent = `Added: ${now.toLocaleString()}`;
  li.appendChild(date);

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.onclick = () => markCompleted(li);
  li.appendChild(completeBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";
  deleteBtn.onclick = () => li.remove();
  li.appendChild(deleteBtn);

  document.getElementById("pendingList").appendChild(li);
  taskInput.value = "";
}

function markCompleted(task) {
  task.querySelector("button").remove(); 
  document.getElementById("completedList").appendChild(task);
}
