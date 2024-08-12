



export default function OrderManagement({ date, setDate }) {
    const handleArchive = (e) => {
        e.preventDefault()
        console.log('vous avez archivé la facture !');
    };
    
    return (
        <main>
            <h1>Gestion des Factures</h1>
            <div className="date">
                <input
                    type="date"
                    value={date}
                    onChange={setDate}
                />
            </div>

            <div className="client-table">
                <button className="add-btn" onClick={handleArchive}>Archiver les dernières factures</button>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Client</th>
                            <th>Vendeur</th>
                            <th>Date d'édition</th>
                            <th>Dernière modification</th>
                            <th>Modifier</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        </main>
    )
}