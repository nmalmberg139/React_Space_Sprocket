import {BrowserRouter, Routes, Route} from "react-router-dom";
import SpaceHome from "./SpaceHome";
import SpaceInventory from "./SpaceInventory";
import NavBar from "../Navbar";
import SpaceCreate from "./SpaceCreate";
import PartDetails from "./PartDetails";


function SpaceSprockets(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<SpaceHome />} />
                    <Route exact path="/home" element={<SpaceHome />} />
                    <Route exact path="/sprockets" element={<SpaceInventory />} />
                    <Route exact path="/sprockets/:id" element={<PartDetails />} />
                    <Route exact path="/create" element={<SpaceCreate />} />
                    <Route exact path="/Nav" element={<NavBar />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default SpaceSprockets;