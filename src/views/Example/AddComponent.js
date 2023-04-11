import React from "react";

class AddComponent extends React.Component {
    state = {
        jobsTitle:"",
        salary:""
    }
    handleOnChangeJobsTitle= (event) => {
        this.setState (
            {
                jobsTitle: event.target.value
            }
        )
    }
    handleOnChangeSalary= (event) => {
        this.setState (
            {
                salary: event.target.value
            }
        )
    }
    handleOnClickSubmit = (event) => {
        event.preventDefault();
        if (!this.state.jobsTitle || !this.state.salary) {
            alert("Missing require parameter!");
            return;
        }
        console.log("Click me, Job's Title: " + this.state.jobsTitle + ", Salary: " + this.state.salary);
        this.props.addNewJob({
            jobsTitle: this.state.jobsTitle,
            salary: this.state.salary,
            id: Math.floor(Math.random() * 1001)
        });
        this.setState({
            jobsTitle: '',
            salary: ''
        })
    }
    render () {
        return (
            <form>
                <label>Job's Title:</label><br/>
                <input type="text" id="fname" name="fname" value={this.state.jobsTitle} onChange={(event) => {this.handleOnChangeJobsTitle(event)}}/><br/>
                <label>Last name:</label><br/>
                <input type="text" id="lname" name="lname" value={this.state.salary} onChange={(event) => {this.handleOnChangeSalary(event)}}/><br/><br/>
                <input type="button" value="Submit" onClick={(event) => this.handleOnClickSubmit(event)}/>
            </form>
        )
    }
}

export default AddComponent;