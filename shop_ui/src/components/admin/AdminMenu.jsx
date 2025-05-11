import {useSelector} from "react-redux";
import {Link } from "react-router-dom";
function AdminMenu() 
{
    const data = useSelector(state=>state.userData.value)
    return<div className="hero_area">
        <header className="header-section">
            <nav className="navbar navbar-expand-lg custom_nav-container">
                <div className="collapse navbar-collapse" id="navbarsupportedContent">
                   <ul className="navbar nav">
                    <li clasName="nav-item">
                        <Link className="nav-link" to="/userHome">Home</Link>
                    </li>
                    
                    <li clasName="nav-item">
                        <Link className="nav-link" to="/addCategory">Add Category</Link>
                    </li>
                    
                    <li clasName="nav-item">
                        <Link className="nav-link" to="/viewAllCategory">Show Category</Link>
                    </li>
                    
                    <li clasName="nav-item">
                        <Link className="nav-link" to="/addProducts">Add Products</Link>
                    </li>
                    
                    <li clasName="nav-item">
                        <Link className="nav-link" to="/viewAllProducts">Show Products</Link>
                    </li>
                    
                    <li clasName="nav-item">
                        <Link className="nav-link" to="/viewAllOrder">Order</Link>
                    </li>
                    
                    <li clasName="nav-item">
                        <Link className="nav-link" to="/userHome">{data.name}</Link>
                    </li>
                    
                    <li clasName="nav-item">
                        <Link className="nav-link" to="/logout">LogOut</Link>
                    </li>
                    
                   </ul>
                </div>
            </nav>
        </header>
    </div>
}
export default AdminMenu