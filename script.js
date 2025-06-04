const taskBoard = document.getElementById("task-board");
const form = document.getElementById("task-form");
const nameInput = document.getElementById("task-name");
const labelInput = document.getElementById("task-label");
const countDisplay = document.getElementById("done-count");

let doneCount = 0;

function renderTask(name, label, date = new Date(), done = false) {
  const card = document.createElement("div");
  card.classList.add("task-card");
  if (done) card.classList.add("done");

  const title = document.createElement("h3");
  title.textContent = name;

  const meta = document.createElement("div");
  meta.className = "task-meta";
  meta.innerHTML = `<span class="tag">${label}</span> Criado em: ${date.toLocaleDateString()}`;

  const action = document.createElement("div");
  if (!done) {
    const button = document.createElement("button");
    button.className = "complete-btn";
    button.textContent = "Concluir";
    button.onclick = () => {
      card.classList.add("done");
      button.remove();
      doneCount++;
      updateCounter();
    };
    action.appendChild(button);
  }

  card.appendChild(title);
  card.appendChild(meta);
  card.appendChild(action);

  taskBoard.appendChild(card);
}

function updateCounter() {
  countDisplay.textContent = doneCount;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = nameInput.value.trim();
  const label = labelInput.value.trim() || "geral";

  if (name) {
    renderTask(name, label);
    nameInput.value = "";
    labelInput.value = "";
  }
});

