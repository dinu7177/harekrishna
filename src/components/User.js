import React from "react";

class User extends React.Component {  //class based component

    constructor(props) { // props 
        super(props);

        this.state = {                       //using stateVariables
            count: 0,
            count1:1
        };
    }

    render() {
        return (
            <div className="user-card">
                <h3>Name : {this.props.name}</h3>  {/* getting props from parent component About.js */}
                <h3>Location : {this.props.location}</h3>
                <h3>count: {this.state.count}</h3>
                <button onClick={() =>{
                    this.setState({count:this.state.count + 1})
                }}>CountIncrease</button>
            </div>
        )
    }
}

export default User