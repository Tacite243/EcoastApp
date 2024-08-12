import axios from "axios";
import { useState } from "react";



export default function CreateClient({ isOpen, isClose }) {
    const [clientName, setClientName] = useState();
    const [clientEmail, setClientEmail] = useState();
    const [clientPhone, setClientPhone] = useState();
    const [clientAdresse, setClientAdresse] = useState();

    const handleAddClient = async (e) => {
        e.preventDefault();
        const newClient = {
            prenom: clientName,
            email: clientEmail,
            phoneNumber: clientPhone,
            address: clientAdresse
        };

        try {
            const response = await axios.post('https://capston-project-tacite243.onrender.com/api/client/create', newClient);
            console.log('Client added successfully:', response.data);
            setClientName('');
            setClientEmail('');
            setClientPhone(null);
            setClientAdresse(null);
        } catch (error) {
            console.error('There was an error adding the category:', error);
        };
    };


    if (!isOpen) return null

    return (
        <div className="popup-overlay">
            <div className="popup">
                <form onSubmit={handleAddClient}>
                    <h2>Ajouter un client</h2>
                    <input
                        type="text"
                        placeholder="Prénom"
                        value={clientName}
                        onChange={(e) =>  setClientName(e.target.value)}
                        required
                        className="form-field"
                    />
                    <input
                        type="email"
                        placeholder="email"
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        className="form-field"
                        required
                    />
                    <input
                        type="text"
                        placeholder="numéro de téléphone"
                        value={clientPhone !== null ? clientPhone : ''}
                        onChange={(e) => setClientPhone(e.target.value)}
                        className="form-field"
                    />
                    <input
                        type="text"
                        placeholder="addresse"
                        value={clientAdresse !== null ? clientAdresse : ''}
                        onChange={(e) => setClientAdresse(e.target.value)}
                        className="form-field"
                    />
                    <button onClick={isClose}>Annuler</button>
                    <button type="submit">Ajouter le client</button>
                </form>
            </div>
        </div>
    )
}