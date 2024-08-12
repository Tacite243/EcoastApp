import { useState } from "react";
import { Routes } from "react-router-dom";
import Aside from "../components/aside";
import Right from "../components/right";
import Dashboard from "../pages/dashboard";


export default function MainRoutes() {
    const today = new Date();
    today.setDate(today.getDate());
    const [date, setDate] = useState(today.toISOString().split('T')[0]);

    return (
        <div className="container">
            <Aside />
                <Routes>
                    <Route path='/dashboard' element={<Dashboard />} />
                </Routes>
            <Right />
        </div>
    )
}