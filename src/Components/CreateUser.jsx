import axios from "axios"
import { useState } from "react"
import style from "./home.module.css"
import { useNavigate } from "react-router-dom"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CreateUser=()=>{
    let[name,setName]=useState("")
    let[salary,setSalary]=useState("")
    let[company,setCompany]=useState("")
    let[gender,setGender]=useState("")
    let[id,setId]=useState("")

   let navigation=useNavigate()
    let idata=(e)=>{
        setId(e.target.value)

    }
    let namedata=(e)=>{
        setName(e.target.value)

    }
    let salarydata=(e)=>{
        setSalary(e.target.value)

    }
     let companydata=(e)=>{
        setCompany(e.target.value)

    } 
    let genderdata=(e)=>{
        setGender(e.target.value)

    }

    let formhandle=(e)=>{
        let payload={id,name,salary,company,gender}
        axios.post(" http://localhost:3000/Employeedetalis",payload)
        .then((rs)=>{
            console.log("data is uploaded successfully");
            console.log(rs.data);
        })
        .catch(()=>{
            console.log("something went wrong");
        })
        navigation("/users")

    }

    return(
        <div id={style.form}>
            <section>
                <label htmlFor="">Name</label>
                <input type="text" value={name} onChange={namedata} placeholder="Enter Name"  /> <br />
                <label htmlFor="">Salary</label>
                <input type="text" value={salary} onChange={salarydata} placeholder="Enter Salary" /> <br />
                <label htmlFor="">Company</label>
                <input type="text" value={company} onChange={companydata} placeholder="Enter Company"  /><br />
                <label htmlFor="">Gender</label>
                <input type="text" value={gender} onChange={genderdata} placeholder="Enter Gender" /><br />
                <button onClick={formhandle}>Submit</button>

            </section>

        </div>
    )


}
export default CreateUser