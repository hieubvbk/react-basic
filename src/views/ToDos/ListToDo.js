import React from "react";
import  "./ListToDo.scss";

class ListToDo extends React.Component {
    state = {
        listToDos: [
            {id : "toDo1", title: "Playing a game"},
            {id : "toDo2", title: "Swiming"},
            {id : "toDo3", title: "Jumping"}
        ]
    }
    render () {
        let {listToDos} = this.state;
        console.log(">>> ListToDo:", listToDos)
        return (
            <div className="list-todo-container">
                <div className="add-todo"><input type="text"/><button type="button" className="add">Add</button></div>
                <div className="list-todo-content">
                    {
                        listToDos && listToDos.length > 0 && 
                        listToDos.map((item, index) => {
                            return (
                                <div className="todo-child" id={item.id}>
                                    <span> {index + 1} - {item.title} </span>
                                    <button className="edit">Edit</button>
                                    <button className="delete">Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ListToDo;