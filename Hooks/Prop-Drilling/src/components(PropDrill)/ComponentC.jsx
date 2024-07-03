import ComponentD from "./ComponentD";

function ComponentC(props) {
    return(
        <div className="box">
            <h4>ComponentC</h4>
            <ComponentD user={props.user}/>
        </div>
    );
}

export default ComponentC;