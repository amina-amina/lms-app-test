import Liststudent from '../Student/Liststudent';
import './Home.css';
import Formstudent from '../Student/Newstudent';
import React from 'react';
import StudentModel from "../../models/Student-model"
import axios from '../../utils/axios';
import Module from '../../shared/module';


class Home extends React.Component {
    constructor() {
        //constructeur de parent
        super();
        //data
        this.state = {
            cancelEditState:false,
            moreInfo:{},
            isPresent:true,
            nom: "",
            pren: "",
            email: "",
            avatar: "",
<<<<<<< HEAD
            updatedsdstudent_id: -1,
            textBtnState: "addstudent",
            iconBtnState: "fas fa-plus-circle",
            action: "ADD",
            backupList: [],
=======
            updatedsdstudent_id:-1,
            textBtnState:"addstudent",
            iconBtnState:"fas fa-plus-circle",
            action:"ADD",
            backupList:[],
>>>>>>> c0bf970fc13440c4beb4f9f5b3dc4ea52848b142
            list_student_data: []
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
                    <Formstudent
<<<<<<< HEAD
                        textBtn={this.state.textBtnState}
                        iconBtn={this.state.iconBtnState}
=======
                        textBtn = {this.state.textBtnState}
                        iconBtn = {this.state.iconBtnState}
>>>>>>> c0bf970fc13440c4beb4f9f5b3dc4ea52848b142
                        avatar={this.state.avatar}
                        nom={this.state.nom}
                        pren={this.state.pren}
                        email={this.state.email}
                        action={this.state.action}

                        handleAddSubmit={this.addStudent}
                        handleEditSubmit={this.submitEditStudent}

                        changeInput={this.changeInput}
<<<<<<< HEAD
                        cancelEdit={this.state.cancelEditState}
                        
                         cancel = {this.cancel}
=======
>>>>>>> c0bf970fc13440c4beb4f9f5b3dc4ea52848b142


                    />
                    <Liststudent dataList={this.state.list_student_data}
<<<<<<< HEAD
                        handleDeleteStudent={this.deleteStudent}
                        handleEditStudent={this.EditStudent}
                        handleViewStudent={this.ViewStudent}
                        handlesearch={this.searchStudent}


                    />
                    <Module 
                    data ={this.state.moreInfo}
                    
                    handleabsent ={this.present}
=======
                                 handleDeleteStudent={this.deleteStudent}
                                 handleEditStudent={this.EditStudent}
                                 handlesearch={this.searchStudent}
                                 
                                 
>>>>>>> c0bf970fc13440c4beb4f9f5b3dc4ea52848b142
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
<<<<<<< HEAD
                true)
=======
                false)
>>>>>>> c0bf970fc13440c4beb4f9f5b3dc4ea52848b142
            //vider states
            this.setState({
                nom: "",
                pren: "",
                email: "",
                avatar: "",
                

            })
            //ajouter student a la liste
            let newStudentList = this.state.list_student_data
            newStudentList.push(nvStudent)
            this.setState({ list_student_data: newStudentList })
            //ajouter etudiant a la partie serveur en utilisant axios
            const data_student = {
                nom: nvStudent.nom,
                pren: nvStudent.pren,
                email: nvStudent.email,
                avatar: nvStudent.avatar,
                isPresent: nvStudent.isPresent,

            }
            axios.post("students.json", data_student).then((response) => {
                //console.log(response.data)
                let id_new_student = response.data.name;
                //chercher l'etudiant qui a l'id ==0 sur la liste
                let newListeStudent = this.state.list_student_data;
                newListeStudent.forEach(s => {
                    if (s.id == 0) {
                        s.id = id_new_student
                    }
                    // console.log(s)

                })
                this.setState({ list_student_data: newListeStudent })



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
<<<<<<< HEAD
    componentDidMount() {
        axios.get("students.json").then((reponse) => {
            if (reponse.data != null) {
                console.log(reponse)
                //extraire toutes les clés de l'objet data
                let keys = Object.keys(reponse.data)
                // console.log(keys)
                //parcourir les keys
                let listEtudiant = keys.map(k => {
                    let n = new StudentModel(
                        k,
                        reponse.data[k].nom,
                        reponse.data[k].pren,
                        reponse.data[k].email,
                        reponse.data[k].avatar,
                       reponse.data[k].isPresent

                    );
                    // console.log(k)
                    //creer la nouvelle liste des etudiants
                    return n;


                    //affichage de l'objet data
                    //console.log(k,reponse.data[k].email)

                })


                //ajouter la liste au state
                this.setState({ list_student_data: listEtudiant })
                //ajouter un backup
                this.setState({ backupList: listEtudiant })
            }
            //console.log(listEtudiant)
=======
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
                //console.log(k)
                //creer la nouvelle liste des etudiants
                return n;

               //affichage de l'objet data
               //console.log(k,reponse.data[k].email)
           })
           //ajouter la liste au state
           this.setState({list_student_data:listEtudiant})
           //ajouter un backup
           this.setState({backupList:listEtudiant})
        }
           //console.log(listEtudiant)
>>>>>>> c0bf970fc13440c4beb4f9f5b3dc4ea52848b142


        })
    }
    deleteStudent = (idStudent) => {
        let choice = window.confirm("Are you sure?")
<<<<<<< HEAD
        if (choice == true) {
            axios.delete("students/" + idStudent + ".json").then((response) => {
                //let newList = this.state.list_student_data;
                // newList=newList.filter(s=>s.id !== idStudent)
                let newList = this.state.backupList.filter(
                    (s) => s.id != idStudent

                );
                this.setState({ list_student_data: newList })
                //changer le backup
                this.setState({ backupList: newList })

            })
        }

        // alert ("delete student")
    }
    //edit student lorsqu'on clique sur btn update icon
    EditStudent = (UpdatedStudent) => {
        // alert("edit")
        //console.log(UpdatedStudent)
        //changer le text du button newStudent
        this.setState({ textBtnState: "Edit Student" })
        //changer icon
        this.setState({ iconBtnState: "fas fa-edit" })
        //ajouter les informations au state
        this.setState({
            nom: UpdatedStudent.nom,
            pren: UpdatedStudent.pren,
            email: UpdatedStudent.email,
            avatar: UpdatedStudent.avatar,
            updatedsdstudent_id: UpdatedStudent.id,
            isPresent:UpdatedStudent.isPresent,
=======
        if (choice == true){        
            axios.delete("students/"+idStudent+".json").then((response)=>{
            //let newList = this.state.list_student_data;
           // newList=newList.filter(s=>s.id !== idStudent)
           let newList = this.state.backupList.filter(
            (s)=>s.id !== idStudent

           );
            this.setState({list_student_data:newList})
            //changer le backup
            this.setState({backupList:newList})

>>>>>>> c0bf970fc13440c4beb4f9f5b3dc4ea52848b142
        })
        //changer l'action state
        this.setState({ action: "EDIT" })
        this.setState({cancelEditState:true})
    }
    //submitted editstudent student va changer depuis firebase
    submitEditStudent = (event) => {
        event.preventDefault();
        //alert(1)
        //partie data a envoyer a database
        const student_data = {
            nom: this.state.nom,
            pren: this.state.pren,
            email: this.state.email,
            avatar: this.state.avatar,
            isPresent: this.state.isPresent,
        }
        axios.put("students/" + this.state.updatedsdstudent_id + ".json", student_data).then((responce) => {
            //console.log(responce)
            //changer etudiant dans la liste
            let newList = this.state.list_student_data;
            newList.forEach((s) => {
                if (s.id == this.state.updatedsdstudent_id) {
                    s.nom = responce.data.nom;
                    s.pren = responce.data.pren;
                    s.email = responce.data.email;
                    s.avatar = responce.data.avatar;
                   
                }
            })
            //modifier la liste
            this.setState({ list_student_data: newList })
            //modifier la liste backup
            this.setState({ backupList: newList })
            //vider formulaire
            event.target.reset();
            //vider state
            this.setState({
                nom: "",
                pren: "",
                email: "",
                avatar: "",
                updatedsdstudent_id: -1,
                textBtnState: "addstudent",
                iconBtn: "fas fa-plus-circle",
                action: "ADD"
            })
        })


    }
    searchStudent = (event) => {
        //concerver notre liste
        // this.setState({backupList:this.state.list_student_data})

        let query = event.target.value.toLowerCase();

        //changer la liste
        if (query == "") {
            this.setState({ list_student_data: this.state.backupList })
        } else {
            let newList = this.state.list_student_data.filter(s =>
                s.nom.toLowerCase().includes(query) ||
                s.pren.toLowerCase().includes(query)
            );


            this.setState({ list_student_data: newList })
        }

        //console.log(event.target.value)

    }
    ViewStudent = (studentInfos) => {
        console.log(studentInfos)
        this.setState({
            
            moreInfo:{...studentInfos}
        });

        
        




    }
<<<<<<< HEAD
    cancel =()=>{
        
        
        this.setState({
            nom: "",
            pren: "",
            email: "",
            avatar: "",
            textBtnState: "ADD STUDENT",
            iconBtnState: "fas fa-plus-circle",
            cancelEditState: false
        })
        
       
    
    }
    present=()=>{
         alert(1)
       // this.setState({ isPresent:true})
       let newList = this.state.list_student_data;
       newList.forEach(s=>{
           if(s.id == this.state.moreInfo.id){
               s.isPresent =! s.isPresent
           }
       })
       this.setState({list_student_data:newList})
       this.setState({backupList:newList})
       
       //appliquer le changement sur moreInfo
     //  let data_student ={... this.state.moreInfo,isPresent:!this.state.moreInfo.isPresent}
       let data_student ={
           nom:this.state.moreInfo.nom,
           pren:this.state.moreInfo.pren,
           email:this.state.moreInfo.email,
           avatar:this.state.moreInfo.avatar,
           isPresent:!this.state.moreInfo.isPresent
       }
       //fff
       
         axios.put("students/" + this.state.moreInfo.id + ".json", data_student )
        //     //console.log(responce)
        //     //changer etudiant dans la liste
        //     let newList = this.state.list_student_data;
        //     newList.forEach((s) => {
        //         if (s.id == this.state.updatedsdstudent_id) {
        //             s.isPresent = responce.data.isPresent;
                   
                   
        //         }
                
        //     })
        //     //console.log(response.data)
           
        //     this.setState({list_student_data:newList})
        // })
        

    }
  

=======
    //edit student lorsqu'on clique sur btn update icon
    EditStudent = (UpdatedStudent)=>{
       // alert("edit")
       //console.log(UpdatedStudent)
       //changer le text du button newStudent
       this.setState({textBtnState:"Edit Student"})
       //changer icon
       this.setState({iconBtnState:"fas fa-edit"})
       //ajouter les informations au state
       this.setState({
           nom:UpdatedStudent.nom,
           pren:UpdatedStudent.pren,
           email:UpdatedStudent.email,
           avatar:UpdatedStudent.avatar,
           updatedsdstudent_id:UpdatedStudent.id
       })
    //changer l'action state
    this.setState({action:"EDIT"})
    }
    //submitted editstudent student va changer depuis firebase
    submitEditStudent = (event) =>{
        event.preventDefault();
        //alert(1)
        //partie data a envoyer a database
        const student_data={
            nom:this.state.nom,
            pren:this.state.pren,
            email:this.state.email,
            avatar:this.state.avatar
        }
        axios.put("students/"+this.state.updatedsdstudent_id +".json",student_data).then((responce)=>{
            //console.log(responce)
            //changer etudiant dans la liste
            let newList = this.state.list_student_data;
            newList.forEach((s) =>{
                if (s.id == this.state.updatedsdstudent_id){
                    s.nom = responce.data.nom;
                    s.pren = responce.data.pren;
                    s.email = responce.data.email;
                    s.avatar = responce.data.avatar;
                }
            })
            //modifier la liste
            this.setState({list_student_data:newList})
            //modifier la liste backup
            this.setState({backupList:newList})
            //vider formulaire
            event.target.reset();
            //vider state
            this.setState({
                nom:"",
                pren:"",
                email:"",
                avatar:"",
                updatedsdstudent_id:-1,
                textBtnState:"addstudent",
                iconBtn:"fas fa-plus-circle",
                action:"ADD"
            })
        })


    }
    searchStudent = (event)=>{
        //concerver notre liste
       // this.setState({backupList:this.state.list_student_data})
        
       let query = event.target.value.toLowerCase();
       
        //changer la liste
        if(query == ""){
            this.setState({list_student_data:this.state.backupList})
        }else{
            let newList = this.state.list_student_data.filter(s=>
                s.nom.toLowerCase().includes(query)||
                s.pren.toLowerCase().includes(query)
                );

        
        this.setState({list_student_data:newList})
            }

        //console.log(event.target.value)
        
    }
    
>>>>>>> c0bf970fc13440c4beb4f9f5b3dc4ea52848b142


}
export default Home;