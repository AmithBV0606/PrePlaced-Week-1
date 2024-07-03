import { useState } from "react";
import ComponentB from "./ComponentB";

function ComponentA(){
    const [user, setUser] = useState("Amith")
    return(
        <div className="box">
            <h4>ComponentA</h4>
            <p>{`Hello ${user}!!`}</p>
            <ComponentB user={user}/>
        </div>
    );
}

export default ComponentA