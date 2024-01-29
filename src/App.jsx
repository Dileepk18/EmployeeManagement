import { BrowserRouter,Routes,Route } from "react-router-dom"
import HomeUser from "./Components/HomeUser"
import CreateUser from "./Components/CreateUser"
import User from "./Components/User"
import EditUser from "./Components/EditUser"
import Spotify from "./spotify/Spotify"
import MainHome from "./Components/MainHome"


const App=()=>{
    return(
        <div>
            <BrowserRouter>
            <HomeUser/>
            <Routes>
                <Route exact path={"/"} element={<MainHome/>}/>
                <Route path={"/createuser"} element={<CreateUser/>}/>
                <Route path={"/users"} element={<User/>}/>
                <Route path={"/editusers/:index"} element={<EditUser/>}/>
            </Routes>
            </BrowserRouter>


            {/* <Spotify/> */}

           



        </div>
    )

}
export default App