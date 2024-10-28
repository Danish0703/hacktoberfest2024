let todo = [];
let req = prompt("please enter your request");  
while(true)
    if(req === "quit"){
        console.log("quitting the app");
        break;
    // Remove the extra opening curly brace
    if(req === "list"){
        console.log("**********");
        for(task of todo){
            console.log(task);
        }
        console.log("**********");
    }else if(req === "add"){
        let newTask = prompt("please enter the task");
        todo.push(newTask);
        console.log("task added");
    }else if(req === "delete"){
        let index = parseInt(prompt("enter the index to delete"));
        let deleted = todo.splice(index,1);
        console.log("deleted task is "+deleted);
    }
}