import MainHome from "./MainHome"
import style from "./home.module.css"
import { Link } from "react-router-dom"
const HomeUser=()=>{
    return(
      
          <section id={style.nav}>
            <Link to={'createuser'}><button>Create Employee</button></Link>
            <Link to={'users'}><button>Employee Details</button></Link>
          </section>
         
        
    )

}
export default HomeUser