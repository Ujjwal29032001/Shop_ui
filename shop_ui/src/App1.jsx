import {Route , Routes} from "react-router-dom"
import Category from "./components/admin/Category.jsx"
import Order from "./components/admin/Order.jsx"
import LogOut from "./components/admin/LogOut.jsx"
import Menu from "./components/admin/Menu.jsx"
import Product from "./components/admin/Product.jsx"
import Profile from "./components/admin/Profile.jsx"


function App1() {
    return<div>
      <Routes>
        <Route path="/" element={<Category/>}></Route>
        <Route path="/logout" element={<LogOut/>}></Route>
        <Route path="/menu" element={<Menu/>}></Route>
        <Route path="/order" element={<Order/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
       
      </Routes>
    </div>
}
export default App1

