import React from 'react'
import Student from './Student';

export default function Liststudent(props) {
   
    //console.log(props)
    return (

        <div className="h-75 col-8 border p-5 overflow-scroll ">
            <input onKeyUp={props.handlesearch}
           // value={props.myinput}
                type="text"
                className="w-50 form-control mx-auto"
                placeholder="Filter students by firstname or lastname"
            />
            <div className="p-5 d-flex flex-wrap justify-content-center ">
                
              
               {
             props.dataList.map(s=><Student 
                key={s.id} 
                data={s}
                handleDelete={props.handleDeleteStudent}
                handleEdit={props.handleEditStudent}
<<<<<<< HEAD
                handleView={props.handleViewStudent}
=======
>>>>>>> c0bf970fc13440c4beb4f9f5b3dc4ea52848b142
                


             />)

                } 
               
               
            </div>


        </div>

    )
}


