var todoInput = document.querySelector("#todoInput");
var todoAddButton = document.querySelector("#todoAddButton");
var todoDeleteButton = document.querySelector("#todoDeleteButton");
var todoList = document.querySelector("#todoList");



var todoListData = [];

function  addItem(){
    var value = todoInput.value;

    if(!value.trim()){
        alert("Please fill in the boxes !! ");
        return;
    }


    todoListData.push(value);
    console.log("click", todoListData);
    
    todoInput.value = "";
    showItems();
}


function showItems(){
    todoList .innerHTML = todoListData.map(function (item, index){
        return (
        ` <li class="list-group-item d-flex justify-content-between ">
        ${index+1},${item}
        <button type="button" class="btn btn-danger btn-sm " 
        id="todoRemoveButton"
        onclick="removeItem(${index})">
        remove
        </button>
        
        </li>`);
        
    })
    .join("");
    console.log("todoListData", todoListData);

}

function removeItem(index){
    console.log("index" , index);

    newArrayData = todoListData.filter(function (_, elementIndex){
        if(elementIndex !== index)
        return true;
        return false;
    });

    console.log("newArrayData",newArrayData);
    console.log("todoListData",todoListData);

    todoListData = newArrayData;

    showItems();
}

function deletelist(){
    todoListData = [];
    showItems();
}

todoAddButton.onclick = addItem;
todoDeleteButton.addEventListener(".click",deletelist);