import { useEffect, useState } from "react";
import CreateClient from "../components/createClient";
import axios from "axios";



export default function ClientManagement({ date, setDate }) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [allClients, setAllClients] = useState([]);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const handleClick = () => {
        openPopup();
    };

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await axios.get('https://capston-project-tacite243.onrender.com/api/client');
                setAllClients(response.data);
            } catch (error) {
                console.error('Failed to fetch all clients: ', error);
            }
        };

        fetchClients();
    })

    return (
        <main>
            <h1>Gestions des Clients</h1>
            <div className="date">
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>

            <div className="client-table">
                <button className="add-btn" onClick={handleClick}>Ajouter un nouveau client</button>
                <CreateClient isOpen={isPopupOpen} isClose={closePopup} />
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Prénom</th>
                            <th>Téléphone</th>
                            <th>Email</th>
                            <th>Factures</th>
                            <th>Actions</th>
                            <th>Observations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allClients.map(client => (
                            <tr key={`client-${client.id}-${allClients.length}`}>
                                <td>{client.id}</td>
                                <td>{client.prenom}</td>
                                <td>{client.phoneNumber}</td>
                                <td>{client.email}</td>
                                <td>{client.invoices}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    )
}