// import User from "./User";
import UserClass from "./UserClass";
import React from 'react'

class About extends React.Component {
    constructor () {
        super()
        console.log('About constructor')
    }
    componentDidMount() {
        console.log('About Component did mount')
    }
    render () {
        console.log('About render')
        return (
            <div>
                <h1>I am about Page</h1>
                {/* <User name={"Prince Soni"} location={"Jaigaon"} contact="prince_oo1"/> */}
                <UserClass name={"Prince Soni"} location={"Jaigaon"} contact="prince_oo1"/>
            </div>
        )
    }
}

// const About = () => {
//     return (
//         <div>
//             <h1>I am about Page</h1>
//             <User name={"Prince Soni"} location={"Jaigaon"} contact="prince_oo1"/>
//             <UserClass name={"Prince Soni"} location={"Jaigaon"} contact="prince_oo1"/>
//         </div>
//     )
// }
export default About;