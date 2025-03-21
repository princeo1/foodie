import { LOGO_URL } from "../utils/constants"
import { useState,useEffect } from 'react'
import { Link } from 'react-router'
import useOnlineStatus from '../utils/useOnlineStatus' 

const Header = () => {
    const [loginBtn, setloginBtn] = useState('login');
    const onlineStatus = useOnlineStatus();

    useEffect(()=> {
        console.log('useEffect called')
    },[loginBtn])
    return <div className="header">
        <div className="logo">
            <img
                className="nav-logo"
                src={LOGO_URL}
                alt="logo"
            />
        </div>
        <div className="navbar">
                <div className="nav-item">
                    <div>Online Status : {onlineStatus ? 'Online' : 'Offline'}</div>
                </div>
                <div className="nav-item">
                    <img src="https://cdn-icons-png.flaticon.com/512/1413/1413908.png"
                    className="corporate-icon"/>
                    <Link to="./groceries">Groceries</Link>
                </div>
                <div className="nav-item"><img src="https://cdn-icons-png.flaticon.com/512/4440/4440484.png"
                 className="corporate-icon"/>
                 <Link to="./"> Home </Link>
                </div>
                <div className="nav-item"><img src="https://cdn-icons-png.flaticon.com/512/2956/2956869.png"
                 className="corporate-icon"/>
                 <Link to="./offers"> Offers </Link>
                </div>
                <div className="nav-item"><img src="https://icons.veryicon.com/png/o/miscellaneous/flat-icon/help-252.png"
                 className="corporate-icon"/>
                 <Link to="./about"> About </Link>
                </div>
                <div className="nav-item"><img src="https://cdn-icons-png.flaticon.com/512/1413/1413908.png"
                 className="corporate-icon"/>
                 <Link to="cart"> Cart </Link>
                </div>
                <div 
                className="nav-item"
                onClick={() => {
                    console.log('login btn clicked')
                    loginBtn === 'login' ? setloginBtn('logout') : setloginBtn('login')
                 }}
                 >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRylqFwcq_UkroUbJ0rD0_BYS1cCb2tqTimwA&s" className="corporate-icon" />
                {loginBtn}
                </div>
        </div>
    </div>
}

export default Header