// This is a goodx.html
import React from "react";
import ReactDOM from 'react-dom/client';

const Header = () => {
    return <div className="header">
        <div className="logo">
            <img
                className="nav-logo" 
                src="https://t3.ftcdn.net/jpg/08/29/90/88/360_F_829908823_kYsRKdQcIaYEAhHRAZTIXuSKvuVPif8w.jpg"
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
                <div className="nav-item"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRylqFwcq_UkroUbJ0rD0_BYS1cCb2tqTimwA&s"
                 className="corporate-icon"/>Signin
                </div>
        </div>
    </div>
}

const App = () => {
    return <div className="app">
        <Header/>
    </div>
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);