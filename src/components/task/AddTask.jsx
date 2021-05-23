import React, {Component} from "react";
import {addTask} from "../../actions/taskActions";
import {connect} from "react-redux";
import './Task.css'


class AddTask extends Component{
    state ={
      task: "",
        checked:"false",
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.addTask(this.state)
        document.getElementById("addTaskForm").reset()
        console.log(this.state)
    }

    render(){
        return(
            <>
                <form
                    id="addTaskForm"
                    className="todo-form"
                    autoComplete="off"
                    onSubmit={this.handleSubmit}
                >
                    <h1>Your Tasks</h1>

                        <input
                            type="text"
                            placeholder="Add a task"
                            className="todo-input"
                            id="task"
                            onChange={this.handleChange}
                        />
                        <button type="submit" className="todo-button">
                            AddTask
                        </button>
                </form>
            </>
        )

    }
}

const mapDispatchToProps=dispatch=>{
    return{
        addTask: task=>dispatch(addTask(task))
    }
}

export default connect(null, mapDispatchToProps)(AddTask)