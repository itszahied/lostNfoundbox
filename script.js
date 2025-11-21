// Password protection
document.getElementById("passwordForm")?.addEventListener("submit", function(e){
  e.preventDefault();
  let pass = document.getElementById("password").value;
  if(pass === "user123"){
    document.getElementById("postForm").style.display = "block";
    document.getElementById("passwordForm").style.display = "none";
  } else {
    alert("Wrong password!");
  }
});

// Save item with image
function saveItem(){
  let name = document.getElementById("itemName").value;
  let desc = document.getElementById("itemDesc").value;
  let imgFile = document.getElementById("itemImg").files[0];

  if(name.trim() === "" || desc.trim() === ""){
    alert("Please fill in all fields.");
    return;
  }

  if(imgFile){
    let reader = new FileReader();
    reader.onload = function(e){
      let items = JSON.parse(localStorage.getItem("lostItems")) || [];
      items.push({name, desc, img: e.target.result});
      localStorage.setItem("lostItems", JSON.stringify(items));
      alert("Item posted!");
      window.location.href = "index.html";
    };
    reader.readAsDataURL(imgFile);
  } else {
    let items = JSON.parse(localStorage.getItem("lostItems")) || [];
    items.push({name, desc, img: null});
    localStorage.setItem("lostItems", JSON.stringify(items));
    alert("Item posted!");
    window.location.href = "index.html";
  }
}