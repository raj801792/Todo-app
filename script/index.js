

showNotes();


let taskNo=0;
handelTaskNo();

// add note in local storage
let addBtn = document.getElementById("addBtn")
addBtn.addEventListener("click", function (e) {

    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
        
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let MyObj={
        text:addTxt.value
    }

    notesObj.push(MyObj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";

    //console.log(notesObj);
    taskNo+=1;
    handelTaskNo();
    showNotes();
})


//For Note Show parpass
function showNotes() {

    //hide delete Button 
    document.getElementById("addBtn").style.visibility = "hidden";

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
        
    }
    else {
        notesObj = JSON.parse(notes);
        
    }
    let html = "";

    notesObj.forEach(function (element, index) {
        html += `
        <div class="to-do">
        <p><i class="fa-regular fa-circle mx-2"></i></p>
        <p class="my-task" onmouseover="showDeleteBtn(this)" onmouseout="hideDeleteBtn(this)">${element.text}</p>
        <p onclick="deleteNote(this.id)" onmouseover="showDeleteBtn(this)" onmouseout="hideDeleteBtn(this)" ><i class="fa-regular fa-circle-xmark deleteBtn cursor mx-2"></i></p>
    </div>`

    });

    let notesEle = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesEle.innerHTML = html;
    }
    else {
        notesEle.innerHTML = `No task are present`;
    }
    
}

//Delete parpass
function deleteNote(index) {
    //console.log(`I am deleting!! ${index}`);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    taskNo-=1;
    handelTaskNo();
    showNotes();
}
function handelTaskNo(){
    if(taskNo == 0 && notesObj!=null){
    for(i of notesObj){
        taskNo+=1;
    }
}
    let TaskNo=document.getElementById('taskNo').innerText=taskNo+" tasks left";
}


//For Add button Showing 
function showAddBtn(){
    document.getElementById("addBtn").style.visibility = "visible";
}

//for delete btn showing for every task
function showDeleteBtn(mythis){
    let parent = mythis.closest(".to-do");
    var task = parent.querySelector(".deleteBtn");
    task.style.visibility = "visible";
}

//for delete btn hidding for every task
function hideDeleteBtn(mythis){
    let parent = mythis.closest(".to-do");
    var task = parent.querySelector(".deleteBtn");
    task.style.visibility = "hidden";
}


