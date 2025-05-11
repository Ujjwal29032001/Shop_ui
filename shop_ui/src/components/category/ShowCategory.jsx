import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import WebService from "../../service/WebService";
import WebAPI from "../../service/WebAPI";

function ShowCategory() {
    const data = useSelector(state => state.userData.value);
    const [list, setList] = useState([]);
    const [msg, setMsg] = useState('');
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadCategoryList();
    }, []);

    const loadCategoryList = async () => {
        setLoading(true);
        try {
            const resp = await WebService.getAPIWithToken(WebAPI.showCategoryList, data.token);
            console.log("Response from show category list:", resp);

            if (resp && resp.data && resp.data.status) {
                setList(resp.data.categoryList || []);
                setMsg("Categories loaded successfully");
            } else {
                setMsg(resp.data ? resp.data.message : "Failed to load categories.");
            }
        } catch (error) {
            console.error("Error while loading categories:", error);
            setMsg("Failed to load categories.");
        } finally {
            setLoading(false);
        }
    };

    const filteredList = list.filter(cat =>
        cat.category_name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container">
            <br /><br />
            <h1 style={{ textAlign: 'center', color: 'red' }}>
                Show Category List: {msg}
            </h1>
            <br />

            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search category..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </div>

            {loading ? (
                <div className="text-center">Loading...</div>
            ) : (
                <div className="table-responsive">
                    <table className="table table-bordered table-hover table-striped">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredList.length > 0 ? (
                                filteredList.map((catList, index) => (
                                    <tr key={catList._id}>
                                        <td>{index + 1}</td>
                                        <td>{catList._id}</td>
                                        <td>{catList.category_name}</td>
                                        <td>
                                            <button className="btn btn-success">Update</button>
                                            &nbsp; &nbsp; || &nbsp; &nbsp;
                                            <button className="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="text-center">No matching categories found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default ShowCategory;
