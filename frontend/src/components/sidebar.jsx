import { Link } from "react-router-dom";


export default function SideBar({ routes }) {
    return (
        <div className="sidebar">
            {routes.map((route, index) => (
                <div key={index} id='lien' className={location.pathname === route.path ? 'active' : ''}>
                    <Link to={route.path}><h3>{route.name}</h3></Link>
                </div>
            ))}
            {/* 
            <div className="lien">
                <h3>Resources Humaines</h3>
            </div>
            <div className="lien">
                <h3>Finances</h3>
                <span className="message-count">26</span>
            </div>
            <div className="lien">
                <h3>Se déconnecter</h3>
            </div> */}
        </div>
    )
}