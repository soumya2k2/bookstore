import { Route, Routes } from "react-router-dom";

const ConsumerRoutes = () => {
    return <Routes>
        <Route path="list" element={<Listbook/>}/>
        <Route path="details" element={<Detailbook/>}/>
    </Routes>
}
 
export default ConsumerRoutes;