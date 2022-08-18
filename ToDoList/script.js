//menambah list
const clickToAddList = document.getElementById("addList");
clickToAddList.addEventListener("click", addList);
const enterToAddList = document.getElementById("inputList");
enterToAddList.addEventListener("keypress", function(ev){
    if(ev.key === "Enter"){
        addList();
    }
})

//menghapus list
let button = document.querySelector("ul");
button.addEventListener("click", deleteList);

//memberi mark "done" pada list
button.addEventListener("click", markList);

function addList(){
    let nameCheck = false;
    let text = document.getElementById("inputList").value;
    let nameList = document.getElementsByClassName("listName");
    let errorDiv = document.getElementById("errorMsg");
    if (errorDiv != null) {
        errorDiv.remove();
        document.getElementById("inputList").style.marginBottom = "0px";
        document.querySelector("ul").style.marginTop = "0px";
    }
    for (let i = 0; i < nameList.length; i++) {
        if (nameList[i].innerHTML === text) {
            nameCheck = true;
        }
    }
    if (text === "") {
        errorMessage(text);
    } else if (nameCheck === true) {
        errorMessage(text);
        nameCheck = false;
    } else {
        let newList = document.createElement("li");
        newList.className = "list";

        let spanListName = document.createElement("span");
        spanListName.className = "listName";
        spanListName.setAttribute("contenteditable", "true");
        let textList = document.createTextNode(text);
        spanListName.appendChild(textList);

        let spanButton = document.createElement("span");
        spanButton.className = "button";
        let spanDone = document.createElement("span")
        spanDone.className = "done";
        spanDone.innerHTML = "&#10003;"
        let spanRemove = document.createElement("span")
        spanRemove.className = "remove";
        spanRemove.innerHTML = "&#10006;";
        spanButton.appendChild(spanDone);
        spanButton.appendChild(spanRemove);

        newList.appendChild(spanListName);
        newList.appendChild(spanButton);
        let listParent = document.querySelector("#listArea ul");
        listParent.insertBefore(newList, listParent.firstChild);
        document.getElementById("inputList").value = "";
    }
}

function deleteList(e){
    if(e.target.className === "remove"){
        let removeButton = e.target;
        removeButton = removeButton.parentElement.parentElement;
        removeButton.remove();
    }
}

function markList(e){
    if (e.target.classList[0] === "done") {
        let markButton = e.target;
        markButton = markButton.parentElement.previousSibling
        markButton.classList.toggle("checked");
    }
}

function errorMessage(text){
    let errorDiv = document.createElement("div");
    if(text != ""){
        errorDiv.innerHTML = text + " is already on the list!!!";
    }else{
        errorDiv.innerHTML = "List can't be empty";
    }
    errorDiv.id = "errorMsg";
    document.querySelector("#inputSect").appendChild(errorDiv);
    document.getElementById("inputList").style.marginBottom = "10px";
    document.querySelector("ul").style.marginTop = "45px";
}









