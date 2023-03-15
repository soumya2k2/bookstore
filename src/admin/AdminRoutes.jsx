import { Route,Routes } from "react-router-dom";
import DetailBook from "./components/DetailBook";
import ListBook from "./components/ListBook";
const AdminRoutes = () => {
    return <Routes>
        <Route path="list" element={<ListBook/>}/>
        <Route path="details/:id" element={<DetailBook/>}/>
    </Routes>
}

export default AdminRoutes;