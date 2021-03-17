import React from 'react'

export default function Newstudent(props) {
    return (
        <>
        
        
            <div className="col-4 border p-5">
            <div className="text-center ">
        <button 
        type="button" 
        className=
        {props.cancelEdit == true ? "btn btn-danger rounded-circle" : "d-none"}
        onClick ={props.cancel}
        >
            <span width="50" height="50" aria-hidden="true" className=" ">×</span>
          </button>
    </div>
                <div className="avatar border mx-auto mt-5 " 
                    style ={{backgroundImage:`url(${props.avatar||'https://i.stack.imgur.com/l60Hf.png'})`}}
                />
                <form onSubmit={props.action =="ADD" ? props.handleAddSubmit : props.handleEditSubmit} autoComplete="off">
                    <div className="mb-4 mt-4 w-70 mx-auto">
                        <input
                         value={props.nom}
                            name = "nom"
                            placeholder="Firstname"
                            type="text"
                            className="form-control"
                            onChange ={props.changeInput}
                        />
                    </div>
                    <div className="mb-4 mt-4 w-70 mx-auto">
                        <input
                        value={props.pren}
                        name="pren"
                            placeholder="Lastname"
                            type="text"
                            className="form-control"
                            onChange ={props.changeInput}
                        />
                    </div>
                    <div className="mb-4 mt-4 w-70 mx-auto">
                        <input
                         value={props.email}
                        name="email"
                            placeholder="Email address"
                            type="email"
                            className="form-control"
                            onChange ={props.changeInput}
                        />
                    </div>
                    <div className="mb-4 mt-4 w-70 mx-auto">
                        <input
                         value={props.avatar}
                        name="avatar"
                            placeholder="Url Avatar"
                            type="text"
                            className="form-control"
                            onChange ={props.changeInput}
                        />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-warning">
                           <i className={props.iconBtn} /> {props.textBtn} 
                        </button>
                    </div>
                </form>
            </div>
            </>
        

    )
}
