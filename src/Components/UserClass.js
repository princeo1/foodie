import React from 'react'

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        console.log('User Constructor')
        this.state = {
            count: 3,
            count2: 4,
        }
    }
    componentDidMount () {
        console.log('User componentDidMount')
    }
    render() {
        console.log('User Render')
        return (
            <div class="user-card">
                <h1>Count = {this.state.count} </h1>
                <h1>Count2 = {this.state.count2}</h1>
                <button onClick={()=> {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>Increase Count</button>
                <h2>Name : {this.props.name}</h2>
                <h3>Location: {this.props.location}</h3>
                <h4>Contact : {this.props.contact}</h4>
            </div>
        )
    }
}

export default UserClass;