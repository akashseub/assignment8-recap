import { Outlet } from "react-router-dom";
import Navbar from "./Header/Navbar/Navbar";
import Header from "./Header/Header";
import Body from "./Body/Body";




const Home = () => {
    return (
        <div>
            <div className="" style={
                {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    backgroundImage: 'linear-gradient(rgba(255, 250, 2500, 0.6), rgba(255, 250, 250, 0.6)), url("https://i.ibb.co/Yf4s6Gg/group-volunteer-people-donate-stuff-charity-53876-38741.jpg")',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}>
                <Navbar></Navbar>
                <Header></Header>
            </div>
            <Outlet></Outlet>
            <Body></Body>
        </div>
    );
};

export default Home;