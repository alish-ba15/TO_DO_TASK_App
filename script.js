const input = document.getElementById("input");
const list = document.getElementById("list");
var dateWrite = document.getElementById("date")


function addTask() {
    if (input.value == "") {
        alert("Please write something first!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value;

        // Create a span for the close button
        let spanClose = document.createElement("span");
        spanClose.className = "close";


        let spanEdit = document.createElement("span");
        spanEdit.innerHTML = "Edit";
        spanEdit.className = "edit";

        // Append the buttons to the task item
        li.appendChild(spanClose);
        li.appendChild(spanEdit);

        // Add event listener for the edit button
        spanEdit.addEventListener("click", function () {
            const updatedText = prompt("Edit the task:", li.textContent.value);
            if (updatedText !== null) {
                li.innerHTML = updatedText;
                li.appendChild(spanClose);
                li.appendChild(spanEdit);
                saveData();
            }
        });

        // Append the task item to the list
        list.appendChild(li);
    }
    input.value = "";
    saveData();
}

list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.className === "close") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", list.innerHTML);
}

function displayData() {
    list.innerHTML = localStorage.getItem("data");
}
displayData();


function date(){
 var dated = new Date();
 var todayDate= `${dated.getDate()}-${dated.getMonth()+1}-${dated.getFullYear()}`
 dateWrite.innerHTML = todayDate;
 console.log("🚀 ~ file: script.js:68 ~ date ~ todayDate:", todayDate)
}
date()


