   function AddTask(){
    let task_name=document.getElementById("task_name"). value;
    let task_des=document.getElementById("task_des")
   }
   let btnAdd=document.getElementById("btnAdd");
   btnAdd.addEventListener("click",()=>{
    AddTask();
   })
    let se=document.getElementById("task_list");
    
    
    let row=document.createElement("div");
    row.classList.add("row");
    //create name
    let item_name = document.createElement("input");
    item_name.type="text";
    item_name.disabled=true;
    //create desciption
    let item_des=document.createElement("input");
    item_des.type=text;
    item_des.disabled=true;
    //create delete button
    let btn_del=document.createElement("button");
    btn_del.textContent="del";

    //create edit button
    let btn_edit=document.createElement("button");
    btn_edit.textContent="edit";

    row.appendChild

    