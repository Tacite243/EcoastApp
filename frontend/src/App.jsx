import React from "react";
import AppRoutes from "./routes/AppRoutes.jsx";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

export default function App() {
    return (
        <BrowserRouter>
            <div className="contain">
                <AppRoutes />
            </div>
        </BrowserRouter>
    )
}