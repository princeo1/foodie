import { LOGO_URL } from "../utils/constants"
import { useState } from 'react'

const Header = () => {
    const [loginBtn, setloginBtn] = useState('login');
    return <div className="header">
        <div className="logo">
            <img
                className="nav-logo" 
                src={LOGO_URL}
                alt="logo"
            />
        </div>
        <div className="navbar">
                <div className="nav-item"><img src="https://cdn-icons-png.flaticon.com/512/4440/4440484.png"
                 className="corporate-icon"/>For Corporate
                </div>
                <div className="nav-item"><img src="https://cdn-icons-png.flaticon.com/512/2956/2956869.png"
                 className="corporate-icon"/>Offers
                </div>
                <div className="nav-item"><img src="https://icons.veryicon.com/png/o/miscellaneous/flat-icon/help-252.png"
                 className="corporate-icon"/>Help
                </div>
                <div className="nav-item"><img src="https://cdn-icons-png.flaticon.com/512/1413/1413908.png"
                 className="corporate-icon"/>Cart
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