import React from 'react'
import main from "./mainHome.module.css"
import girl from "../images/girl-with-laptop-is-working-office-girl-is-browsing-internet-conversations_647843-112.avif"


const MainHome = () => {
  return (
    <div>
      <section id={main.hero}>
        <div id={main.con1}>
          <div id={main.submain}>
          <h1>Enter The Details Of the<br /> Employees..</h1>
          <h3>Click Create Employee button to get started</h3>
          </div>
          {/* <h3>Click Create Employee button to get started</h3> */}
        </div>
        <div id={main.con2}>
          <img src={girl} alt="" />
        </div>
      </section>
      
    </div>
  )
}

export default MainHome