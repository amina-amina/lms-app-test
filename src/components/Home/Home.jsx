import Liststudent from '../Student/Liststudent';
import './Home.css';
import Newstudent from '../Student/Newstudent';
import React from 'react';
import StudentModel from "../../models/Student-model"
import axios from '../../utils/axios';

class Home extends React.Component {
    constructor() {
        //constructeur de parent
        super();
        //data
        this.state = {
            nom: "",
            pren: "",
            email: "",
            avatar: "",
            list_student_data: [



            ]
            //student:new StudentModel("amina","amina","aaa@gmail.com","https://i.imgur.com/1o1zEDM.png",true)
        };
        //console.log(this.state)
    }
    render() {
        return (
            <>
                <h1 className="text-center text-white mt-5">
                    🧑‍🎓 LMS-APP : <span className="text-warning">Home</span> 🏠
            </h1>

                <div className="container-fluid d-flex p-4">
                    <Newstudent
                        handleSubmit={this.addStudent}
                        changeInput={this.changeInput}
                        avatar={this.state.avatar}

                    />
                    <Liststudent dataList={this.state.list_student_data}
                                 handleDeleteStudent={this.deleteStudent}
                    />



                </div>

            </>


        );
    }


    changeInput = (event) => {
        let value = event.target.value;
        let input = event.target.name;
        this.setState({ [input]: value })

    }
    addStudent = (event) => {
        event.preventDefault();

        //vider les inputs de formulaire
        event.target.reset()

        //validation de formulaire
        if (this.state.nom == "" || this.state.pren == "" || this.state.avatar == "" || this.state.email == "") {
            alert("veuillez remplir les champs de formulaire")
        } else {
            let nvStudent = new StudentModel(
                0,
                this.state.nom,
                this.state.pren,
                this.state.email,
                this.state.avatar,


                false)
            //vider states
            this.setState({
                nom: "",
                pren: "",
                email: "",
                avatar: ""
               
            })
            //ajouter student a la liste
            let newStudentList = this.state.list_student_data
            newStudentList.push(nvStudent)
            this.setState({ list_student_data: newStudentList })
            //ajouter etudiant a la partie serveur en utilisant axios
            const data_student={
                nom:nvStudent.nom,
                pren:nvStudent.pren,
                email:nvStudent.email,
                avatar:nvStudent.avatar,
                ispresent:nvStudent.isPresent

            }
            axios.post("students.json", data_student).then((response)=>{
                //console.log(response.data)
                let id_new_student = response.data.name;
                //chercher l'etudiant qui a l'id ==0 sur la liste
                let newListeStudent = this.state.list_student_data;
                newListeStudent.forEach(s=>{
                    if(s.id ==0){
                        s.id=id_new_student
                    }
                   // console.log(s)
                    
                })
                this.setState({list_student_data:newListeStudent})

               

              /*  const myNewStudent ={
                    nom:nvStudent.nom,
                    pren:nvStudent.pren,
                    email:nvStudent.email,
                    avatar:nvStudent.avatar,
                    id:id_new_student
                }*/
                //console.log(myNewStudent)
                //console.log(id_new_student)

            })
            
        }



        //recuperer les infos
        // alert(this.state.nom)
        //alert(this.state.pren)
        //alert(this.state.avatar)
        //alert(this.state.email)

        //  console.log(nvStudent)
    };
    // recuperer la liste ds etudiants firebase onload page
    componentDidMount(){
        axios.get("students.json").then((reponse)=>{
            if(reponse.data!=null){
           // console.log(reponse)
           //extraire toutes les clés de l'objet data
           let keys = Object.keys(reponse.data)
           //parcourir les keys
           let listEtudiant = keys.map(k=>{
             let n = new StudentModel(
                 k,
                reponse.data[k].nom,
                reponse.data[k].pren,
                reponse.data[k].email,
                reponse.data[k].avatar,
                reponse.data[k].isPresent
                );
                //creer la nouvelle liste des etudiants
                return n;

               //affichage de l'objet data
               //console.log(k,reponse.data[k].email)
           })
           //ajouter la liste au state
           this.setState({list_student_data:listEtudiant})
        }
           //console.log(listEtudiant)


        })
    }
    deleteStudent = (idStudent)=>{
        let choice = window.confirm("Are you sure?")
        if (choice == true){        
            axios.delete("students/"+idStudent+".json").then((response)=>{
            //let newList = this.state.list_student_data;
           // newList=newList.filter(s=>s.id !== idStudent)
           let newList = this.state.list_student_data.filter(
            (s)=>s.id !== idStudent

           );
            this.setState({list_student_data:newList})
        })
    }
   
       // alert ("delete student")
    }


}
export default Home;