const inputBox = document.querySelector("input");
const addBtn = document.querySelector("button");
const taskList = document.querySelector("ul");

addBtn.addEventListener("click", () => {
    const taskText = inputBox.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    li.addEventListener("click", () => {
        li.style.textDecoration = "line-through";
        li.style.opacity = "0.6";
    });

    taskList.appendChild(li);
    inputBox.value = "";
});
