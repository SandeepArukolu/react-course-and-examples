import React from "react"

// function ChildComponent (props){
//     console.log(props);
//     return(
//         <ul>
//             <li>UserName:{props.UserName}</li>
//             <li>Age:{props.Age}</li>
//             <li>Location:{props.Location}</li>
//         </ul>

//     )
// }

class ChildComponent extends React.Component {

    // ChildComponent(props){

    // }

    render(){
        return(

            <ul>
            <li>UserName:{this.props.UserName}</li>
            <li>Age:{this.props.Age}</li>
            <li>Location:{this.props.Location}</li>
        </ul>
        )
    }

}

export default ChildComponent