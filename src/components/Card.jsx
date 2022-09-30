

function Card(props){
    //function Card(name, last name)
    return(
        <div className="containerContact-card">
            <h3>{props.name1}</h3> 
            <br />
            <br />
            {props.input1} 
            
            
            
        </div>
    )
}

export default Card;