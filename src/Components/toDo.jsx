import React, { Fragment, useState } from "react";

const TodoList = () => {
    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);

    let addTask = "Add a Task";

    const add_button = {
        width: "12%"
    };

    const handleTask = () => {
        if (task === "") {
            alert('Enter a Task');
        }
        else {
            setTaskList([...taskList, task]);
            setTask("");
        }
    };

    const removeTask = (id) => {
        let filterTheTask = taskList.filter((task, index) => index !== id);
        setTaskList(filterTheTask);
    };

    return (
        <Fragment>
            <div className="container">
                <div className="card mt-5">
                    <div className="card-header bg-transparent">
                        <p className="fs-4 d-flex justify-content-center mt-2 text-info">This ToDo List</p>
                    </div>
                    <div className="card-body ">
                        <p className="mt-4 h5 d-flex justify-content-center"><i>{addTask}</i></p>
                        <div className="d-flex justify-content-center mt-4">
                            <input type="text" placeholder="Enter the Task" className="me-2" value={task} onChange={(e) => setTask(e.target.value)} />
                            <button className="btn btn-primary" style={add_button} onClick={() => handleTask()}>Add</button>
                        </div>
                        <div className="mt-5 ">
                            {
                                taskList.map((data, index) => {
                                    return (
                                        <div key={index} className="d-flex justify-content-center">
                                            {/* <ul>
                                                <li>{data}</li>
                                            </ul> */}
                                            <div className="card w-50 my-1">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col col-10 col-sm-10 col-md-8 col-lg-10 col-xl-10col-xxl-8 d-flex justify-content-center">{data}</div>
                                                        <div className="col col-2 col-sm-2 col-md-4 col-lg-2 col-xl-2 col-xxl-4">
                                                            <button className="btn btn-danger" onClick={() => removeTask(index)}>Delete</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default TodoList;