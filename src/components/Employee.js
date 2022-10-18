function Employee(props){
    return(
        <>
        <h4>Employee {props.name}</h4>
        <p>{props.role ? props.role : "No Role"}</p>
        </>
    ); 
}

export default Employee;