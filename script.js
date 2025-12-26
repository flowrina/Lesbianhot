// Age Gate
function enterSite() {
  document.getElementById("ageGate").style.display = "none";
}

// Login
function login() {
  const username = document.getElementById("username").value;
  if (!username) return alert("Enter username");
  localStorage.setItem("user", username);
  window.location.href = "index.html";
}

// Logout
function logout() {
  localStorage.removeItem("user");
  window.location.href = "login.html";
}

// Profile
const userName = document.getElementById("userName");
if (userName) {
  userName.innerText = "👩 " + (localStorage.getItem("user") || "Guest");
}

// Posts
let posts = JSON.parse(localStorage.getItem("posts")) || [];

function addPost() {
  const input = document.getElementById("postInput");
  const user = localStorage.getItem("user") || "Anonymous";
  if (!input.value.trim()) return;

  posts.push({ user, text: input.value });
  localStorage.setItem("posts", JSON.stringify(posts));
  input.value = "";
  renderPosts();
}

function renderPosts() {
  const feed = document.getElementById("feed");
  if (!feed) return;
  feed.innerHTML = "";
  posts.forEach(p => {
    const div = document.createElement("div");
    div.className = "post";
    div.innerHTML = `<strong>${p.user}</strong><br>${p.text}`;
    feed.prepend(div);
  });
}

renderPosts();
