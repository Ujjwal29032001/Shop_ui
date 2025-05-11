import { useSelector } from "react-redux";
import WebAPI from "../../service/WebAPI";
import WebService from "../../service/WebService";
import { useEffect, useState } from "react";

function ShowProduct() {
    const data = useSelector(state => state.userData.value);
    const [list, setList] = useState([]);
    const [msg, setMsg] = useState('');

    useEffect(() => {
        loadProductList();
    }, []);

    const loadProductList = async () => {
        try {
            const resp = await WebService.getAPIWithToken(WebAPI.ShowProductList, data.token);
            console.log("Response is:", resp);

            if (resp && resp.length > 0) {
                setList(resp);
                setMsg(`Total ${resp.length} products found`);
            } else {
                setMsg("No products found");
            }
        } catch (error) {
            console.error("API error:", error);
            setMsg("Failed to load products");
        }
    };

    return (
        <div className="container">
            <br /><br />
            <h1 style={{ textAlign: 'center', color: 'red' }}>Show Product List : {msg}</h1>
            <br /><br />
            <div className="table-responsive">
                <table className="table table-bordered table-hover table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.category}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ShowProduct;
