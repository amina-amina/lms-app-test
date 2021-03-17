


import React from 'react'

export default function Module(props) {
    return (
        <div>
             <div>
  {/* Button trigger modal */}
 
  {/* Modal */}
  <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">More Details de <span class="badge bg-warning text-dark">{props.data.nom} </span> 
          {props.data.isPresent == true ? <span className="badge bg-success text-white">IS PRESENT</span>:<span className="badge bg-danger text-white">IS ABSENT</span>}
          </h5>
          
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span width="50" height="50" aria-hidden="true" className=" btn btn-danger rounded-circle">×</span>
          </button>
        </div>
        <div className="modal-body d-flex border border-secondary p-2">
          <div>
          <p><img className="m-1 " width="250" height="250" src={props.data.avatar} alt=""/></p> 
          </div>
          <div>
          <p ><span className="badge bg-success text-white">nom :</span> <div>{props.data.nom}</div>
          </p>
          <p><span className="badge bg-info  text-white">Prenom :</span> <div> {props.data.pren}</div>
          </p>
          <p><span className="badge bg-warning text-white">email :</span> <div> {props.data.email}</div>
          </p>
          </div> 
        </div>
        <div className="modal-footer">
        <button
        onClick ={props.handleabsent}
         type="button" 
         className={props.data.isPresent==false ? "btn btn-success":"d-none"}
         > present  <i class="fas fa-smile"></i></button>

        <button 
        
        type="button" 
        className={props.data.isPresent==true ? "btn btn-danger":"d-none"}
        onClick ={props.handleabsent}

        >
        absent  <i class="fas fa-skull-crossbones"></i></button>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
    )
}



