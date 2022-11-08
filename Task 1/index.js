window.addEventListener("load",function (){
    const form = document.querySelector("form");
    const input_el = document.querySelector("#new-task-input");
    const list_el = document.querySelector(".task-list");
    const submit_el = document.querySelector("#new-task-submit");


    submit_el.addEventListener("click",function (event){
        event.preventDefault();//It is not allowing the click event on submit_el to perform its default behaviour.

        const task = input_el.value;
        if(!task){
            alert("Please fill the task!");
            return;
        }
        var task_list = document.querySelectorAll(".content>input");
        
        for(var i = 0 ; i < task_list.length ; i++){
            if(task_list[i].value == task){
                alert("This Task is already included");
                return;
            }
        }

        const newTask_el = document.createElement("div");
        const content_el = document.createElement("div");
        const actions_el = document.createElement("div");
        const input = document.createElement("input");
        const edit_el = document.createElement("button");
        const del_el = document.createElement("button");

        newTask_el.classList.add("newTask");
        content_el.classList.add("content");
        actions_el.classList.add("actions");
        edit_el.classList.add("edit");
        del_el.classList.add("delete");

        edit_el.innerText = "EDIT";
        del_el.innerText = "DELETE";
        input.setAttribute("value",task);
        input.setAttribute("readonly","true");

        content_el.appendChild(input);
        actions_el.appendChild(edit_el);
        actions_el.appendChild(del_el);

        newTask_el.appendChild(content_el);
        newTask_el.appendChild(actions_el);

        list_el.appendChild(newTask_el);

        edit_el.addEventListener("click",function (){
            if (this.innerText == "EDIT"){
                input.removeAttribute("readonly");
                input.focus();
                this.innerText = "SAVE";
            }
            else{
                input.setAttribute("readonly","true");
                this.innerText = "EDIT";
            }
        });

        del_el.addEventListener("click",function (){
            list_el.removeChild(newTask_el);
        });

    });
});
