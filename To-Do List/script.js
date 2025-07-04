const inputBox = document.getElementById("input-box");
  const listContainer = document.getElementById("list-container");

  function addTask() {
    if (inputBox.value.trim() === "") {
      alert("You must write something!");
    } else {
      let li = document.createElement("li");
      li.innerHTML = inputBox.value;
      listContainer.appendChild(li); // ✅ Corrected typo: listcontainer → listContainer

      let span = document.createElement("span");
      span.innerHTML = "\u00d7";
      li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
  }

  listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  });

  function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
  }

  function showTask() {
    listContainer.innerHTML = localStorage.getItem("data") || "";
  }
  const themeToggleBtn = document.getElementById("toggle-theme");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  themeToggleBtn.textContent = "☀️";
}

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");

  themeToggleBtn.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});


  showTask();