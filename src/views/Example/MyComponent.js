import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {
    state = {
        arrJobs: [
            {id:"job1",jobsTitle:"Dev",salary:"1000 US"},
            {id:"job2",jobsTitle:"Test",salary:"500 US"},
            {id:"job3",jobsTitle:"Pm",salary:"2000 US"}
        ]
    }

    addNewJob = (job) => {
        console.log("id:", job.id, ", jobsTitle: ", job.jobsTitle, ", salary: ", job.salary);
        // let currentJobs = this.state.arrJobs;
        // currentJobs.push(job);
        this.setState ({
            // arrJobs: currentJobs
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteJob = (job) => {
        console.log(">>> deleteJob:", job);
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs : currentJobs
        })
    }

    componentDidUpdate (prevProps, prevStates) {
        console.log(">>> Run didUpdate, prevStates: ", prevStates, ", currentState: ", this.state);
    }

    componentDidMount () {
        console.log(">>> Run componentDidMount");
    }
    render() {
        console.log(">>> call render: ", this.state);
        return (
            <div>
                <AddComponent addNewJob={this.addNewJob}/>   
                <ChildComponent arrJobs={this.state.arrJobs} deleteJob={this.deleteJob} />
            </div>    
        )
    }
}

export default MyComponent;