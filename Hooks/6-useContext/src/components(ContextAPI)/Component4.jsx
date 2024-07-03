import useAPI from "../context/UserContext";

function Component4() {
    const user = useAPI()
    return(
        <div className="box">
            <h4>Component4</h4>
            <p>{`Bye ${user}!!`}</p>
        </div>
    );
}

export default Component4;