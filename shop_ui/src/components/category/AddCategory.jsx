import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import WebService from "../../service/WebService";
import WebAPI from "../../service/WebAPI";

function AddCategory() {
    const data = useSelector(state => state.userData.value);
    const [msg, setMsg] = useState('');
    const catName = useRef();

    const addCategory = async (event) => {
        event.preventDefault();
        const cat = catName.current.value;
        const obj = { category_name: cat };

        try {
            const resp = await WebService.postAPIWithToken(WebAPI.saveCategory, obj, data.token);
            console.log("Response from add category:", resp);

            if (resp && resp.data && resp.data.status) {
                setMsg("Category added successfully");
            } else {
                setMsg(resp.data ? resp.data.message : "Failed to add category");
            }
        } catch (error) {
            console.error("Error while adding category:", error);
            setMsg("An error occurred while adding the category");
        }
    };

    return (
        <div className="container">
            <h1 style={{ textAlign: 'center', color: 'red' }}>Add Category</h1>
            <form onSubmit={addCategory}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Category"
                        ref={catName}
                    />
                </div>
                <br />
                <div className="form-group">
                    <input
                        type="submit"
                        className="btn btn-success form-control"
                        value="Add Category"
                    />
                </div>
            </form>
            <h1 style={{ color: 'red', textAlign: 'center' }}>{msg}</h1>
        </div>
    );
}

export default AddCategory;
