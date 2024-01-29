import axios from "axios"
import { useEffect, useState } from "react"
import style from "./home.module.css"
import { Link } from "react-router-dom"

const User=()=>{
    let [Employeedetalis,setEmployeedetalis]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/Employeedetalis")
        .then((rs)=>{
            console.log("got the data");
            console.log(rs.data);
            setEmployeedetalis(rs.data)
        })
        .catch(()=>{
            console.log("you made a mistake");
        })


    },[])

    let deletedata=(value)=>{
        axios.delete(`http://localhost:3000/Employeedetalis/${value}`)
        window.location.assign("/users")

    }

    return(
        <div id={style.Home}>
            
            <div id={style.head}>
                <h1>Employee Details</h1>
            </div>
            {Employeedetalis.map((x)=>{
                return(
                    
                    <div id={style.cards}>
                    
                        <table>
                            <tr></tr>
                            <tr>
                                <th colSpan="2">USER {x.id}</th>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td>:  {x.name}</td>
                            </tr>
                            <tr>
                                <td>salary</td>
                                <td>:  {x.salary}</td>
                            </tr>
                            <tr>
                                <td>Company</td>
                                <td>:  {x.company}</td>
                            </tr>
                            <tr>
                                <td>Gender</td>
                                <td>:  {x.gender}</td>
                            </tr>
                            <tr id={style.tab}>
                                <td ><Link to={`/editusers/${x.id}`} id={style.edit}>Edit</Link></td>
                                <td><button onClick={()=>{deletedata(x.id)}} id={style.btn}>Delete</button></td>
                            </tr>

                    
                    
                        </table>

                    </div>

                )
            })
                
                 
          }

           
           
        </div>
    )

}
export default User