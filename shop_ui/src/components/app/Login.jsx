import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import {useRef} from "react"
import WebAPI from "../../service/WebAPI";
import WebService from "../../service/WebService";

import {changeUserInfo} from "../../redux/UserSlice";
import { useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  var email = useRef();
  var password = useRef();
  const loginUser = async(event)=>{ 
    event.preventDefault();
    var em = email.current.value 
    var pass = password.current.value 

    const obj = {email:em,password:pass}
    var resp = await WebService.postAPICall(WebAPI.loginUser,obj)
    console.log("Login User:"+resp);
    console.log("Login User: "+JSON.stringify(resp));
    if(resp.data.status){
      var userData = resp.data.data;
      var userobj = {isLoginStaus:true,name:userData.user.name,role:userData.user.
        role,token:userData.token
      };
      dispatch(changeUserInfo(userobj));
      if(userData.user.role == 'admin')
      {
        navigate("/adminHome")
      }
      if(userData.user.role == 'user')
      {
        navigate("/userHome")
      }
    }
  }
  return <>
  
  <section className="contact_section layout_padding">
    <div className="container px-0">
      <div className="heading_container ">
        <h2 className="">
          Login Here !
        </h2>
      </div>
    </div>
    <div className="container container-bg">
      <div className="row">
        
        <div className="col-md-6 col-lg-5 px-0">
          <form onSubmit={loginUser}>
            <div>
              <input type="email" placeholder="Email" ref={email}/>
            </div>
            <div>
              <input type="password" placeholder="Password" ref={password}/>
            </div>
            <div className="d-flex ">
              <input type="submit" value="Login" className="btn btn-success"/> 
            </div>
          </form>
          <span>If you have not register ? <Link to="/register">click here</Link></span>
          <br/><br/>
        </div>
      </div>
    </div>
  </section>
  </>;
}

export default Login;