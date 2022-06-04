
//this is not a constructor
export default function Comment(props) {
    // in functional componenets you just need to return jsx

    //example of function that is scoped to this component
    // const add = (x, y) => {
    //     return x+y
    // }
    return (
        //where do porps come from? --in the function param (args when invoked by react)
        <p>{props.content}</p>
    )
}





// import React, { Component } from 'react'

// class Comment extends Component {
//     render() {
//         return(<p>{this.props.content}</p>)
//     }
// }

// export default Comment