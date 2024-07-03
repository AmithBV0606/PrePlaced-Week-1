import ComponentC from "./ComponentC";

function ComponentB(props) {
    return(
        <div className="box">
            <h4>ComponentB</h4>
            <ComponentC user={props.user}/>
        </div>
    );
}

export default ComponentB