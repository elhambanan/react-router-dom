import { Route, Routes } from "react-router-dom";
import DashBoard from "../components/DashBoard";
import Downloads from "../components/Downloads";
import SideBar from "../components/SideBar";

const Profile = () => {
    return ( 
        <>
         <h2>I am ELI</h2>
         <SideBar />
         <Routes>
             <Route path="dashboard" element={<DashBoard/>}/>
             <Route path="download" element={<Downloads/>}/>
         </Routes>
        </>   
     );
}
export default Profile;