import axios from "axios";
class WebService {
    postAPICall(url,data) {
        var result = axios.post(url,data);
        return result
    }
    postAPIWithToken(url,data,token)
    {
        var result = axios.post(url,data,{
            headers:{
                Authorization:'Bearer '+token
            }
        })
        return result;
    }
    getAPIWithToken(url,token)
    {
        var result = axios.get(url,{
            headers:{
                Authorization:'Bearer '+token
            }
        })
        return result;
    }

}
export default new WebService();