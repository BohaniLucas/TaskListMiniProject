document.addEventListener("DOMContentLoaded" , ()=>{

    const taskList = document.getElementById("taskList");

    const li = document.createElement("li");

    const totalTask = taskList.querySelectorAll("li").length;

    const total = document.getElementById("total");

    const completed = document.getElementById("completed");

    total.innerHTML = totalTask ;

    let totalCount = 0;

    let totalCompltedTasks = 0;

    const updateCompletes = (count)=>{
        completed.innerHTML = count;
    }

    const updateTotal = (count)=>{
        total.innerHTML = count;
    }

    const updateTask = (item)=>{

        const li = document.createElement("li");

        li.innerHTML = item;

        taskList.appendChild(li);

    }


    const addInputValue = ()=>{

        let input = document.getElementById("taskInput").value;

        let item = input.trim();

        console.log(item);

        if(item === ""){
            alert("Please enter your task");
            return;
        }

        totalCount ++;

        updateTotal(totalCount);

        updateTask(item);

        document.getElementById("taskInput").value = "";

    }

    document.getElementById("addBtn").addEventListener("click" , addInputValue);

    const taskManager = [];

    const findTheTask = (li)=>{
        return taskManager.find(item => item.task === li);
    }

    document.addEventListener("click" , (events)=>{

        console.log(events);

        if(events.target.tagName !== "LI"){
            return;
        }

        const li = events.target;

        const doesExist = findTheTask(li);

        if(doesExist){

            totalCount --;

            totalCompltedTasks --;

            updateCompletes(totalCompltedTasks);

            updateTotal(totalCount);

            taskList.removeChild(li);

        }else if(li.parentElement.id === "taskList"){

            const eachTask = {
                task: li
            };

            totalCompltedTasks ++;

            updateCompletes(totalCompltedTasks);

            taskManager.push(eachTask);

            li.innerHTML = `${li.innerHTML} (Completed)`;
        }

        // console.log(clicks.count);
        
        console.log(taskManager);
        
    })

})

