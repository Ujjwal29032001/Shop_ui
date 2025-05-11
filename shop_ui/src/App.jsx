import {Route , Routes} from "react-router-dom"

import Menu from "./components/app/Menu.jsx"
import Home from "./components/app/Home.jsx"
import About from "./components/app/About.jsx"
import Contact from "./components/app/Contact.jsx"
import Shop from "./components/app/Shop.jsx"
import Login from "./components/app/Login.jsx"
import Register from "./components/app/Register.jsx" 
import Footer from "./components/app/Footer.jsx"
import { useSelector } from "react-redux"
import UserMenu from "./components/user/UserMenu.jsx"
import AdminMenu from "./components/admin/AdminMenu.jsx"
import AdminHome from "./components/admin/AdminHome.jsx"
import UserHome from "./components/user/UserHome.jsx"
import AddCategory from "./components/category/AddCategory.jsx"
import ShowCategory from "./components/category/ShowCategory.jsx"
import AddProduct from "./components/products/AddProduct.jsx"
import ShowProduct from "./components/products/ShowProduct.jsx"

 function App() {
  const data = useSelector(state=>state.userData.value)
  console.log("Data is : "+data)
  console.log("Data is : "+JSON.stringify(data))
  return<div>
    {
      (data.isLoginStatus==false) ?
      <>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/login" element={<Login/>}></Route>q
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/shop" element={<Shop/>}></Route>
      </Routes>
      <Footer/>

      </>
      :
      ((data.role=='user')?
     <>
      <UserMenu/>
      <Routes>
       <Route path="/userHome " element={<UserHome/>}></Route>
      </Routes>
     </>
     :
     <>
     <AdminMenu/>
     <Routes>
      <Route path="/adminHome" element={<AdminHome/>}></Route>
     </Routes>
     </>
    )
    
  }
  <Routes>
    <Route path="/addCategory" element={<AddCategory/>}></Route>
    <Route path="/viewAllCategory" element={<ShowCategory/>}></Route>
    <Route path="/addProducts" element={<AddProduct/>}></Route>
    <Route path="/viewAllProducts" element={< ShowProduct/>}></Route>
  </Routes>
   </div>
 }

export default App