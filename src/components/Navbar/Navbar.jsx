import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <>
            <div className="Navbar">
                <Link to='/home'>"Home"</Link>
                <Link to='/news'> "News"</Link>
                <Link to='/weather'>"Weather"</Link>
            </div>
        </>
    )
}

export default Navbar;