const todoForm = document.querySelector("#todo-form");
const inputField = document.querySelector("#input");
const tableBody = document.querySelector("#table-body");
const submitBtn = document.querySelector("#submit-btn");
const updateBtn = document.querySelector("#update-btn");

let initArr = [];

todoForm.onsubmit = (e) => {
  e.preventDefault();
  initArr.push(inputField.value);

  // create element
  const table_tr = document.createElement("tr");
  const table_td_index = document.createElement("td");
  const table_td_todo = document.createElement("td");
  const table_td_edit = document.createElement("td");
  const table_td_delete = document.createElement("td");

  // add class name of element
  table_td_index.className = "td-index";
  table_td_edit.className = "edit-btn";
  table_td_delete.className = "delete-btn";

  // add todo in the table
  initArr.map((item) => {
    table_td_index.innerHTML = Math.random().toString(36).slice(2, 6);
    table_td_todo.innerHTML = item;
    table_td_edit.innerHTML = '<i class="fas fa-edit"></i>';
    table_td_delete.innerHTML = '<i class="fas fa-trash"></i>';

    table_tr.appendChild(table_td_index);
    table_tr.appendChild(table_td_todo);
    table_tr.appendChild(table_td_edit);
    table_tr.appendChild(table_td_delete);

    tableBody.appendChild(table_tr);
    document.querySelector("#input").value = "";
  });

  // delete todo
  table_td_delete.onclick = () => {
    table_td_delete.parentElement.style.display = "none";
    initArr.pop();
  };

  // edit todo
  table_td_edit.onclick = () => {
    inputField.value = table_td_todo.innerHTML;
    submitBtn.style.display = "none";
    updateBtn.style.display = "block";

    // update todo
    updateBtn.onclick = () => {
      table_td_todo.innerHTML = inputField.value;
      document.querySelector("#input").value = "";
      submitBtn.style.display = "block";
      updateBtn.style.display = "none";
    };
  };
};
