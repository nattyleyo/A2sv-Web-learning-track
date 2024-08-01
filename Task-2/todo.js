"use strict";
const btn_add = document.getElementById("add-btn");
const btn_edit = document.getElementById("edit-btn");
const container = document.getElementById("list-add");
const empty = document.getElementById("empty");
const input_data = document.getElementById("text-inp");
let todoList = loadFromLocalStorage();
let currentEditId = null;
function saveToLocalStorage(todoList) {
    localStorage.setItem("todoList", JSON.stringify(todoList));
}
function loadFromLocalStorage() {
    const storedList = localStorage.getItem("todoList");
    return storedList ? JSON.parse(storedList) : [];
}
function renderTodoList() {
    container.innerHTML = "";
    todoList.forEach((item) => {
        const newDiv = document.createElement("div");
        newDiv.className = "items";
        newDiv.setAttribute("key", item.id.toString());
        const content = `
            <li class="items" key="${item.id}">
              <div class="title" id="title">
              <i class="fa-solid fa-feather-pointed"></i>
              </div>
              <p class="content" id="content">${item.task}</p>
              <button class="btns edit-btn">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button class="btns del-btn">
                <i class="fa-solid fa-trash"></i>
              </button>
            </li>`;
        newDiv.innerHTML = content;
        container.appendChild(newDiv);
        const del_btns = newDiv.querySelectorAll(".del-btn");
        const edit_btns = newDiv.querySelectorAll(".edit-btn");
        del_btns.forEach((del_btn) => {
            delHandle(del_btn, newDiv);
        });
        edit_btns.forEach((edit_btn) => {
            editHandle(edit_btn, newDiv);
        });
    });
    empty.style.display = todoList.length === 0 ? "flex" : "none";
}
btn_add.addEventListener("click", () => {
    if (!input_data.value)
        return;
    const newItem = { id: Date.now(), task: input_data.value };
    todoList.push(newItem);
    saveToLocalStorage(todoList);
    renderTodoList();
    input_data.value = "";
});
btn_edit.addEventListener("click", updateHandle);
function delHandle(del_btn, newDiv) {
    del_btn.addEventListener("click", () => {
        const x = confirm("Are you sure you want to delete?");
        if (x) {
            const itemId = Number(newDiv.getAttribute("key"));
            todoList = todoList.filter((item) => item.id !== itemId);
            saveToLocalStorage(todoList);
            renderTodoList();
        }
    });
}
function editHandle(edit_btn, newDiv) {
    edit_btn.addEventListener("click", () => {
        btn_add.style.display = "none";
        btn_edit.style.display = "flex";
        input_data.value =
            newDiv.querySelector(".content").textContent || "";
        currentEditId = Number(newDiv.getAttribute("key"));
    });
}
function updateHandle() {
    if (currentEditId !== null) {
        const index = todoList.findIndex((item) => item.id === currentEditId);
        if (index !== -1) {
            todoList[index].task = input_data.value;
            saveToLocalStorage(todoList);
            renderTodoList();
            btn_add.style.display = "flex";
            btn_edit.style.display = "none";
            input_data.value = "";
            currentEditId = null;
        }
    }
}
// Load the todo list from localStorage when the page loads
window.addEventListener("load", renderTodoList);
