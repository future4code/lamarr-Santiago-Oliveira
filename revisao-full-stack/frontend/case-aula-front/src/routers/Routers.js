import { BrowserRouter, Routes, Route } from "react-router-dom"
import EndPage from "../page/EndPage"
import Home from "../page/Home"

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/end-page" element={<EndPage />} />
            </Routes>
        </BrowserRouter>)
}

export default Routers