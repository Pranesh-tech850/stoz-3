const API =
  "https://6a19b9fc489e4715751a73b2.mockapi.io/api/v1/users";

const form = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const usersDiv = document.getElementById("users");

let editId = null;

// READ
async function getUsers() {
  try {
    const res = await fetch(API);
    const users = await res.json();

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

  } catch (error) {
    console.log(error);
  }
}

getUsers();

// CREATE + UPDATE
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const userData = {
    name: nameInput.value
  };

  try {

    if (editId) {

      await fetch(`${API}/${editId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      });

      editId = null;

      form.querySelector("button").textContent =
        "Save User";

    } else {

      await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      });

    }

    form.reset();
    getUsers();

  } catch (error) {
    console.log(error);
  }
});

// DELETE
async function deleteUser(id) {

  try {

    await fetch(`${API}/${id}`, {
      method: "DELETE"
    });

    getUsers();

  } catch (error) {
    console.log(error);
  }
}

// EDIT
function editUser(id, name) {

  nameInput.value = name;

  editId = id;

  form.querySelector("button").textContent =
    "Update User";
}

