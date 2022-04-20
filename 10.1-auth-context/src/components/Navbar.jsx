import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext"

const Navbar = () => {
    const { IsAuth, toggleAuth } = useContext(AuthContext);
    // console.log(IsAuth, toggleAuth);
    return (
        <nav>
            <li>
                <button onClick={toggleAuth}>
                    {IsAuth ? "Log Out" : "Log In"}
                </button>
            </li>
        </nav>
    )
}

export { Navbar }