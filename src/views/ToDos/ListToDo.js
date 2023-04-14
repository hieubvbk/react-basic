import React from "react";
import  "./ListToDo.scss";
import AddToDo from "./AddToDo";
import { toast } from 'react-toastify';
// import Nav from "../Nav/Nav";

class ListToDo extends React.Component {
    state = {
        listToDos: [
            {id : "toDo1", title: "Playing a game"},
            {id : "toDo2", title: "Swiming"},
            {id : "toDo3", title: "Jumping"}
        ],
        editToDo: {}
    }

    addNewToDo = (toDo) => {
        this.setState({
            listToDos: [...this.state.listToDos, toDo]
        });
        toast.success("Wow so easy!");
    }

    deleteToDo = (toDo) => {
        let currentToDos = this.state.listToDos;
        currentToDos = currentToDos.filter(item => item.id !== toDo.id);
        this.setState({
            listToDos: currentToDos
        })
        toast.success('Delete success');
    }

    editToDo = (toDo) => {
        let {editToDo, listToDos} = this.state;
        let isEmpty = Object.keys(editToDo).length === 0;
    
        if (!isEmpty && toDo.id === editToDo.id) {
            let listToDoCoppy = [...listToDos];
            let index = listToDoCoppy.findIndex(item => item.id === toDo.id);
            listToDoCoppy[index].title = toDo.title;
            this.setState({
                listToDos: listToDoCoppy,
                editToDo: {}
            });
            toast.success('Edit success!');
        } else {
            this.setState({
                editToDo: toDo
            })
        }
        return;
    }

    handleOnChange = (event) => {
        console.log(">>> handleOnChange, event: ", event.target.value);
        let currentEditToDo = {...this.state.editToDo};
        currentEditToDo.title = event.target.value;
        this.setState(
            {
                editToDo: currentEditToDo
            }
        )
    }
    render () {
        let {listToDos, editToDo} = this.state;
        console.log(">>> ListToDo:", listToDos);
        let isEmpty = Object.keys(editToDo).length === 0;
        console.log(">>> isEmpty: ", isEmpty);
        return (
            <div className="list-todo-container">
                <AddToDo addNewToDo={this.addNewToDo}/>
                <div className="list-todo-content">
                    {
                        listToDos && listToDos.length > 0 && 
                        listToDos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    {
                                        (!isEmpty && item.id === editToDo.id) 
                                        ? <><span> {index + 1} - </span> 
                                            <input type='text' value={editToDo.title} onChange={(event) => this.handleOnChange(event)}/>
                                            <button className="edit" onClick={() => this.editToDo(editToDo)}>Save</button>
                                            </>
                                        : <><span> {index + 1} - {item.title} </span><button className="edit" onClick={() => this.editToDo(item)}>Edit</button></>
                                    }
                                    <button className="delete" onClick={() => this.deleteToDo(item)}>Delete</button>
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