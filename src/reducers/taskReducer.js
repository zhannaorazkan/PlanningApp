const taskReducer=(state={}, action)=>{
    switch(action.type){
        case "ADD_TASK":{
            console.log("added a task")
            return state
        }
        case "ADD_TASK_ERR":{
            console.log("an error occurred")
            return state
        }
        case "REMOVE_TASK":{
            console.log("a task was removed")
            return state
        }
        case "REMOVE_TASK_ERR":{
            console.log("a task remove error occurred")
            return state
        }
        case "TOGGLE_CHECKED":{
            console.log("status changed")
            return state
        }
        case "TOGGLE_CHECKED_ERR":{
            console.log("status change error")
            return state
        }
        default: return state
    }
}
export default taskReducer