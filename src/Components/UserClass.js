import React from 'react'

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        // console.log('User Constructor')
        this.state = {
            // count: 3,
            // count2: 4,
            userInfo : {
                name: 'Dummy',
                location: 'Dummy location',

            }
        }
    }
    async componentDidMount () {
        // console.log('User componentDidMount')
        const data = await fetch('https://api.github.com/users/princeo1');
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo:json
        })
    }
    render() {
        // console.log('User Render')
        const {name,avatar_url,location } = this.state.userInfo
        return (
            <div class="user-card">
                {/* <h1>Count = {this.state.count} </h1>
                <h1>Count2 = {this.state.count2}</h1> */}
                {/* <button onClick={()=> {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>Increase Count</button> */}
                <img src={avatar_url}/>
                <h2>Name : {name}</h2>
                <h3>Location: {location}</h3>
                {/* <h4>Contact : {this.props.contact}</h4> */}
            </div>
        )
    }
}

export default UserClass;