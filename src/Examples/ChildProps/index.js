

function ChildPropsFunc(props){
    console.dir(props);
    return (<>
    <p>Name: {props.Name}</p>
    <p>Location: {props.Location}</p>
     <p style={{display:'flex', gap:20}}>{props.children}</p>
    </>)
    
}

export default ChildPropsFunc