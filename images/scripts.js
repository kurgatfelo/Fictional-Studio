function myFunction(){
var list = document.createElement("li");
alert(list)
var addList = document.createAddList("water");
list.appendChild(addList);
document.getElementById("fello").appendChild(list);
}
myFunction();