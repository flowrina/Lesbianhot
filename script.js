// Fake online users counter (auto change)
let users = document.getElementById("users");
if (users) {
  setInterval(() => {
    let random = Math.floor(Math.random() * 10);
    users.innerText = 120 + random;
  }, 3000);
}

// Login button
function enterChat() {
  let name = document.getElementById("username").value;
  if (name.length < 2) {
    alert("Please enter a nickname");
    return;
  }
  window.location.href = "index.html";
}
