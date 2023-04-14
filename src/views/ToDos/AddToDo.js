import React from "react";
import { toast } from 'react-toastify';

class AddToDo extends React.Component {
    state = {
        title: ""
    }
    handleOnChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleOnAddToDo = () => {
        if (!this.state.title) {
            toast.error('Missing Title!');
            return;
        }
        this.props.addNewToDo(
            {
                id : Math.floor(Math.random() * 1001),
                title : this.state.title
            }
        );
        this.setState ({
            title: ''
        });
    }
    render() {
        return (
            <div className="add-todo">
                <input type="text" value={this.state.title} onChange={(event) => this.handleOnChange(event)}/>
                <button type="button" className="add" onClick={() => this.handleOnAddToDo()}>Add</button>
            </div>
        )
    };
}

export default AddToDo;