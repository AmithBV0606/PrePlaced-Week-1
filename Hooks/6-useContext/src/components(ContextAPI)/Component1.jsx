import Component2 from "./Component2";
import useAPI from "../context/UserContext";

function Component1() {
    const user = useAPI();
    return(
        <div className="box">
            <h4>Component1</h4>
            <p>{`Hii ${user}`}</p>
            <Component2 />
        </div>
    );
}

export default Component1;