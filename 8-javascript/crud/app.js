const API =
  "https://6a19b9fc489e4715751a73b2.mockapi.io/api/v1/users";

const form = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const usersDiv = document.getElementById("users");

let editId = null;

// READ
function getUsers() {
  fetch(API)
    .then((res) => res.json())
    .then((users) => {
      usersDiv.innerHTML = "";

      users.forEach((user) => {
        const div = document.createElement("div");
        div.classList.add("user");

        div.innerHTML = `
          <span>${user.name}</span>

          <div class="actions">
            <button
              class="edit"
              onclick="editUser('${user.id}','${user.name}')"
            >
              Edit
            </button>

            <button
              class="delete"
              onclick="deleteUser('${user.id}')"
            >
              Delete
            </button>
          </div>
        `;

        usersDiv.appendChild(div);
      });
    });
}

getUsers();

// CREATE + UPDATE
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const userData = {
    name: nameInput.value,
  };

  if (editId) {
    fetch(`${API}/${editId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    }).then(() => {
      editId = null;
      form.querySelector("button").textContent = "Save User";
      form.reset();
      getUsers();
    });
  } else {
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    }).then(() => {
      form.reset();
      getUsers();
    });
  }
});

// DELETE
function deleteUser(id) {
  fetch(`${API}/${id}`, {
    method: "DELETE",
  }).then(() => {
    getUsers();
  });
}

// EDIT
function editUser(id, name) {
  nameInput.value = name;
  editId = id;

  form.querySelector("button").textContent =
    "Update User";
}