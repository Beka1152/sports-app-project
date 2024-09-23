import categoryIcon from "../assets/css/images/list.svg";
import { Link } from "react-router-dom";
function Header() {
    return (
        <header class="header">
            <div class="container">
                <Link to="/categories" class="btn-category">
                    <img src={categoryIcon} alt="Menu Button" />
                </Link>
            </div>
        </header>
    );
}

export default Header;