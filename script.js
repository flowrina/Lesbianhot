function enterSite() {
  document.getElementById("ageGate").style.display = "none";
}

// Load saved posts
let posts = JSON.parse(localStorage.getItem("posts")) || [];

function renderPosts() {
  const feed = document.getElementById("feed");
  feed.innerHTML = "";
  posts.forEach(post => {
    const div = document.createElement("div");
    div.className = "post";
    div.innerText = post;
    feed.prepend(div);
  });
}

function addPost() {
  const input = document.getElementById("postInput");
  if (input.value.trim() === "") return;

  posts.push(input.value);
  localStorage.setItem("posts", JSON.stringify(posts));
  input.value = "";
  renderPosts();
}

renderPosts();
