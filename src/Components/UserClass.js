import React from 'react'

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 3,
            count2: 4,
        }
    }
    render() {
        return (
            <div class="user-card">
                <h1>Count = {this.state.count} </h1>
                <h1>Count2 = {this.state.count2}</h1>
                <h2>Name : {this.props.name}</h2>
                <h3>Location: {this.props.location}</h3>
                <h4>Contact : {this.props.contact}</h4>
            </div>
        )
    }
}

export default UserClass;