import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
function UserMenu()
{
    const data=useSelector(state=>state.userData.value)
    return<div className="hero_area">
        <header className="header_section">
            <nav className="navbar navbar-expand-lg custom_nav-container">
                <div className="collapse navbar-collapse" id="navbarsupported Content">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/userHome">Home</Link> 
                        </li>
                        <li className="nav-item">
            <Link className="nav-link" to="/viewAllCategory">
              Category
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/viewAllProducts">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/viewMyOrder">My Order</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/userProfile">Profile</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/viewCart">Cart : </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/userHome">{data.name}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/logout">Logout</Link>
          </li>
                    </ul>
                </div>
            </nav>
        </header>
    </div>
    

}
export default UserMenu