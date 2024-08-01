const btn_add = document.getElementById("add-btn");
const btn_edit = document.getElementById("edit-btn");
const container = document.getElementById("list-add");
const empty = document.getElementById("empty");
const input_data = document.getElementById("text-inp");

// x.innerHTML = `<div class="title">List Added</div>`;
var flag = 0;
btn_add.addEventListener("click", () => {
  flag++;
  const newDiv = document.createElement("div");

  newDiv.className = "items";
  const content = `
        <li class="items" key="${flag}">
          <div class="title" id= "title">
          <i class="fa-solid fa-feather-pointed"></i>
          </div>
          <p class="content" id = 'content'>${input_data.value}
          </p>
          <button class="btns edit-btn">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button class="btns del-btn">
            <i class="fa-solid fa-trash"></i>
          </button>
        </li>`;
  newDiv.innerHTML = content;
  empty.style.display = "None";
  container.appendChild(newDiv);
  input_data.value = "";

  const del_btns = newDiv.querySelectorAll(".del-btn");
  del_btns.forEach((del_btn) => {
    del_btn.addEventListener("click", () => {
      const x = confirm(`Are you sure want to delete`);
      if (x) {
        container.removeChild(newDiv); // Remove the parent <div>
        flag--;
        if (flag < 1) {
          empty.style.display = "flex";
        }
      }
    });
  });

  const edit_btns = newDiv.querySelectorAll(".edit-btn");
  edit_btns.forEach((edit_btn) => {
    edit_btn.addEventListener("click", () => {
      btn_add.style.display = "none";
      btn_edit.style.display = "flex";
      input_data.value = newDiv.querySelector(".items .content").textContent;
    });
  });

  btn_edit.addEventListener("click", () => {
    newDiv.querySelector(".items .content").textContent = input_data.value;
    btn_add.style.display = "flex";
    btn_edit.style.display = "none";
    input_data.value = "";
  });
});
