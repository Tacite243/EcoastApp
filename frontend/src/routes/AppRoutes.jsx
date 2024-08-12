import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import { useEffect, useState } from "react";
import ProductManagement from "../pages/productManage";
import ClientManagement from "../pages/clientsManage";
import OrderManagement from "../pages/orderManage";
import Selling from "../pages/selling";
import PageStructure from "../components/pageStructure";


export default function AppRoutes() {
    const [token, setToken] = useState(localStorage.getItem('token' || ''));
    const today = new Date();
    today.setDate(today.getDate());
    const [date, setDate] = useState(today.toISOString().split('T')[0]);


    useEffect(() => {
        if (token) {
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem(token)
        }
    }, [token]);

    return (
        <Routes>
            <Route path="/" element={<Login setToken={setToken} />} />
            <Route path="/dashboard" element={token ? <PageStructure content={<Dashboard date={date} setDate={setDate} />} /> : <Navigate to='/' />} />
            <Route path="/products" element={<PageStructure content={<ProductManagement date={date} setDate={date} />} />} />
            <Route path="/clients" element={<PageStructure content={<ClientManagement date={date} setDate={setDate} />} />} />
            <Route path="/orders" element={<PageStructure content={<OrderManagement date={date} setDate={setDate} />} />} />
            <Route path="/sell" element={<PageStructure content={<Selling date={date} setDate={setDate} />} />} />
        </Routes>
    )
}