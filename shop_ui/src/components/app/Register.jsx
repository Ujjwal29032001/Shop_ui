import {useRef} from "react";
 import { useNavigate} from "react-router-dom"
import WebAPI from "../../service/WebAPI";
import WebService from "../../service/WebService";


function Register() {
   const navigate = useNavigate();

  var name = useRef();
  var email = useRef();
  var password = useRef();
  var mobile = useRef();
  var gender = useRef();

  const registerUser = async(event)=>{
    event.preventDefault();
    var nm = name.current.value;
    var em = email.current.value
    var pass = password.current.value 
    var mob = mobile.current.value 
    var gen = gender.current.value;

    const obj = {name:nm,contact:mob,email:em,password:pass,gender:gen};
    var resp = await WebService.postAPICall(WebAPI.registerUser,obj);
    console.log("Response is :"+resp);
    console.log("Response is : "+JSON.stringify(resp));

    if(resp.data.status){
      navigate("/Login")
    }
  }
    
  return <>
  
  <section className="contact_section layout_padding">
    <div className="container px-0">
      <div className="heading_container ">
        <h2 className="">
          Register Here !
        </h2>
      </div>
    </div>
    <div className="container container-bg">
      <div className="row">
        
        <div className="col-md-6 col-lg-5 px-0">
          <form onSubmit={registerUser}>
            <div>
              <input type="text" placeholder="Name" ref={name}/>
            </div>
            <div>
              <input type="email" placeholder="Email" ref={email}/>
            </div>
            <div>
              <input type="password" placeholder="Password" ref={password}/>
            </div>
            <div>
              <input type="text" placeholder="Contact" ref={mobile}/>
            </div>
            <div>
              <select ref={gender}>
                <option>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <br/><br/>
            <div className="d-flex ">
              <input type="submit" value="Register" className="btn btn-success"/> 
            </div>
          </form>
          <br/><br/>
        </div>
      </div>
    </div>
  </section>
  
  </>;
}

export default Register;