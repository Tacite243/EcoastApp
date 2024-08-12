import SideBar from "./sidebar";
import logo from '../assets/logo.png';
import Dashboard from "../pages/dashboard";
import ProductManagement from "../pages/productManage";
import ClientManagement from "../pages/clientsManage";
import OrderManagement from "../pages/orderManage";
import Selling from "../pages/selling";
import PageStructure from "./pageStructure";
import SignIn from "./login/signIn";


const routes = [
    { path: '/sell', component: <PageStructure content={Selling}/>, name: 'Pannier' },
    { path: '/dashboard', component: <PageStructure content={Dashboard} />, name: 'Dashboard' },
    { path: '/products', component: <PageStructure content={ProductManagement}/>, name: 'Gestion des produits' },
    { path: '/clients', component: <PageStructure content={ClientManagement}/>, name: 'Gestion des clients' },
    { path: "/orders", component: <PageStructure content={OrderManagement}/>, name: 'Factures' },
    {path: "/", component: <SignIn />, name: 'Déconnection'}
];


export default function Aside() {
    return (
        <aside>
            <div className="top">
                <div className="logo">
                    <img src={logo} alt="logo de Electric coast" className="coast" />
                    <h2>Electric <span className="danger">coast</span></h2>
                </div>
                <div id="close-btn" className="close">
                    <img src="../assets/icons/close_FILL0_wght400_GRAD0_opsz24.svg" alt="" className="material-icons-sharp" />
                </div>
            </div>
            <SideBar routes={routes} />
        </aside>

    )
}