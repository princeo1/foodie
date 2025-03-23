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
    return <div className="flex justify-between bg-green-100 items-center flex-wrap">
        <div className="logo">
            <img
                className="nav-logo h-[80px] w-[80px] ml-15"
                src={LOGO_URL}
                alt="logo"
            />
        </div>
        <div className="flex text-lg">
                <div className="nav-item">
                    <div className="px-10">Online Status : {onlineStatus ? 'Online' : 'Offline'}</div>
                </div>
                <div className="flex px-10">
                    <Link to="./groceries">Groceries</Link>
                </div>
                <div className="flex px-10">
                 <Link to="./"> Home </Link>
                </div>
                <div className="flex px-10">
                 <Link to="./offers"> Offers </Link>
                </div>
                <div className="flex px-10">
                 <Link to="./about"> About </Link>
                </div>
                <div className="flex px-10">
                 <Link to="cart"> Cart </Link>
                </div>
                <div 
                className="px-10"
                onClick={() => {
                    console.log('login btn clicked')
                    loginBtn === 'login' ? setloginBtn('logout') : setloginBtn('login')
                 }}
                 >
                {loginBtn}
                </div>
        </div>
    </div>
}

export default Header