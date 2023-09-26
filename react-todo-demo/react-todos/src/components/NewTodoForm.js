import React from "react";

function NewTodoForm(){
    return(
        <div className='mt-5'>
            <form action="">
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Assigned</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="" className="form-label">Description</label>
                    <textarea className="form-control" rows={3} required></textarea>
                </div>
                <button type="button" className="btn btn-primary mt-3">Add Todo</button>
            </form>

        </div>
    )

}

export default NewTodoForm