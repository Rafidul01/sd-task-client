import { useContext, useState } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { RouteContext } from "../provider/RouteProvider";



const Home = () => {
    const [route, setRoute] = useState([]);
    const {hello, currentRoute } = useContext(RouteContext);

    //currentRoute -> type=milk, category=sells, name=Milk sells, card , table

    // fetch -> milk coll= info.

    return (
        <div>
            <Navbar/>
            <Outlet/>
            {
                //card-> <cardcom porop(info)>
            }
            
            <p className="text-5xl text-red-600">{currentRoute ? currentRoute.name : hello}</p>
        </div>
    );
};

export default Home;