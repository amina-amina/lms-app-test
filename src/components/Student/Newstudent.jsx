import React from 'react'

export default function Newstudent(props) {
    return (
        
            <div className="col-4 border p-5">
                <div className="avatar border mx-auto mt-5 " />
                <form onSubmit={props.handleSubmit} autoComplete="off">
                    <div className="mb-4 mt-4 w-70 mx-auto">
                        <input
                            name = "nom"
                            placeholder="Firstname"
                            type="text"
                            className="form-control"
                            onChange ={props.changeInput}
                        />
                    </div>
                    <div className="mb-4 mt-4 w-70 mx-auto">
                        <input
                        name="pren"
                            placeholder="Lastname"
                            type="text"
                            className="form-control"
                            onChange ={props.changeInput}
                        />
                    </div>
                    <div className="mb-4 mt-4 w-70 mx-auto">
                        <input
                        name="email"
                            placeholder="Email address"
                            type="email"
                            className="form-control"
                            onChange ={props.changeInput}
                        />
                    </div>
                    <div className="mb-4 mt-4 w-70 mx-auto">
                        <input
                        name="avatar"
                            placeholder="Url Avatar"
                            type="text"
                            className="form-control"
                            onChange ={props.changeInput
                            
                            }
                        />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-warning">
                            Add Student <i className="fas fa-plus-circle" />
                        </button>
                    </div>
                </form>
            </div>
        

    )
}
