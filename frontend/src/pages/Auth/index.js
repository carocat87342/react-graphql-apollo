import { Outlet } from "react-router-dom";
import { AuthBg } from "./models";

export default function Auth(){
    return(
        <AuthBg>
            <Outlet/>
        </AuthBg>
    )
}