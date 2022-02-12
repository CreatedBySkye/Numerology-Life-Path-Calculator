import AboutNumerology from "./AboutNumerology"
import Profiles from "./CreateProfile";
import Signup from "./Signup";
import { useAuth0 } from "@auth0/auth0-react";


const Home = () => {
    const { isAuthenticated} = useAuth0();
return (
    isAuthenticated ? <><Profiles/></> : <><AboutNumerology /><Signup/></>)
};


export default Home;