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

                    />
                    <Liststudent dataList={this.state.list_student_data} />



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
            axios.post("students.json", nvStudent)

        }


        //recuperer les infos
        // alert(this.state.nom)
        //alert(this.state.pren)
        //alert(this.state.avatar)
        //alert(this.state.email)

        //  console.log(nvStudent)
    };


}
export default Home;