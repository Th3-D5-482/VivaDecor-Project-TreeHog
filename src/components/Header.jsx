import './Header.css';
function Header() {
    return(
        <>
            <header>
                <nav className="navBar">
                    <div className ="logo">
                        <div className ="vector1">
                            Vi
                        </div>
                        <div className ="vector2">
                            vaDecor
                        </div>
                    </div>
                    <div className="menu">
                        <nav>
                            <ul> 
                                <li><a href ="#">Home</a></li>
                                <li><a href ="#">Services</a></li>
                                <li><a href ="#">Contact</a></li>
                                <li><a href ="#">Support</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className ="signUpBtn">
                        <button>Sign Up</button>
                    </div>
                    <div className ="hamBurgerMenu">
                        <hr className ="ham"/>
                        <hr className ="ham"/>
                        <hr className ="ham"/>
                    </div>
                </nav>
            </header>
        </>
    );
}
export default Header;