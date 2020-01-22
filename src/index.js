document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("create-task-form");
  const newtaskfield = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const newTask = document.createElement("li");
    newTask.innerHTML = newtaskfield.value;
    taskList.appendChild(newTask);
    event.target.reset();
  };
});

