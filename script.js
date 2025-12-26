function openRoom(room) {
  const rooms = {
    general: "lesbianhotgeneral",
    dating: "lesbianhotdating",
    friends: "lesbianhotfriends"
  };
  document.getElementById("chatFrame").src =
    "https://chatango.com/embed/group?handle=" + rooms[room] + "&arch=js&styles=1";
}
