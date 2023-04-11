import React from 'react';

class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }
    
    handleShowHide = () => {
        this.setState ({
            showJobs: !this.state.showJobs
        }) 
    }

    handleOnClickForDetele = (job) => {
        console.log(">>> call handleOnClickForDelete, job: ", job);
        this.props.deleteJob(job);
    }

    render() {
        console.log(">>> call props: ", this.props);
        let {arrJobs} = this.props; 
        let { showJobs } = this.state;
        console.log(">>> showJobs: ", showJobs);
        return (
            <>
                {
                    showJobs === false ? 
                        <div><button onClick={() => this.handleShowHide()}>Show</button></div>
                    :
                    <>
                        <div className='Job-Lists'>
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>{item.jobsTitle} - {item.salary} <></><span onClick={() => this.handleOnClickForDetele(item)}>x</span></div>   
                                    )    
                                })
                            }
                        </div>
                        <div><button onClick={() => this.handleShowHide()}>Hide</button></div>
                    </>
                }
            </>
        )
    }
}

// const ChildComponent = (props) => {
//     console.log(">>> call props: ", props);
//     let {name, arrJobs} = props; 
//     return (
//         <div className='Job-Lists'>
//             {
//                 arrJobs.map((item, index) => {
//                     return (
//                         <div key={item.id}>{item.name} - {item.salary}</div>
//                     )    
//                 })
//             }
//         </div>
//     )
// }

export default ChildComponent;