import Component4 from "./Component4";
import useAPI from "../context/UserContext";

function Component3() {
    const user = useAPI()
    return(
        <div className="box">
            <h4>Component3</h4>
            <p>{`How are you ${user}!!`}</p>
            <Component4 />
        </div>
    );
}

export default Component3;