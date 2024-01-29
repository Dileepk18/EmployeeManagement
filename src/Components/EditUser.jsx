import React from 'react'
import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate,useParams } from 'react-router-dom'
import style from './home.module.css'

const EditUser = () => {
    let[name,setName]=useState("")
    let[salary,setSalary]=useState("")
    let[company,setCompany]=useState("")
    let[gender,setGender]=useState("")
    let[id,setId]=useState("")

    let {index}=useParams()
    // console.log(index);

   let navigation=useNavigate()

   useEffect(()=>{
    axios.get(`http://localhost:3000/Employeedetalis/${index}`)
    .then((response)=>{
        setName(response.data.name)
        setSalary(response.data.salary)
        setCompany(response.data.company)
        setGender(response.data.gender)
        



    })
    .catch(()=>{
        console.log("did not got the data");
    })

},[])



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

    let formhandle=()=>{
        let payload={id,name,salary,company,gender}
        axios.put(` http://localhost:3000/Employeedetalis/${index}`,payload)
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
                <h1>Update Details</h1>
                <label htmlFor="">Name</label>
                <input type="text" value={name} onChange={namedata} placeholder="Enter name"  /> <br />
                <label htmlFor="">Salary</label>
                <input type="text" value={salary} onChange={salarydata} placeholder="Enter Salary"  /> <br />
                <label htmlFor="">Company</label>
                <input type="text" value={company} onChange={companydata} placeholder="Enter Company"  /><br />
                <label htmlFor="">Gender</label>
                <input type="text" value={gender} onChange={genderdata} placeholder="Enter Gender" /><br />
                <button id={style.update} onClick={formhandle} >Update</button>

            </section>

        </div>
    )
  
}

export default EditUser