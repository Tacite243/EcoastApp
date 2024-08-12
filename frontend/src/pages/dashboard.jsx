import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Dashboard({ date, setDate }) {
    const [totlStockValue, setTotlStockValue] = useState(0);

    useEffect(() => {
        const fetchTotlStockValue = async () => {
            try {
                const response = await axios.get('https://capston-project-tacite243.onrender.com/api/products/total-stock-value');
                setTotlStockValue(await response.data.totalStockValue);
            } catch (error) {
                console.error("Erreur lors de la récupération de la valeur totale du stock: ", error);
            }
        };

        fetchTotlStockValue();
    }, []);

    return (
        <>
            <main>
                <h1>Tableau de bord</h1>
                <div className="date">
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div className="insights">
                    <div className="sales">
                        <div className="middle">
                            <div className="left">
                                <h3>Total en stock</h3>
                                <h1>${totlStockValue.toFixed(2)}</h1>
                            </div>
                            <div className="progress">
                                <svg>
                                    <circle cx="38" cy="38" r="36"></circle>
                                </svg>
                                <div className="number">
                                    <p>81%</p>
                                </div>
                            </div>
                        </div>
                        <small className="text-muted">{date}</small>
                    </div>

                    {/* ============= SALES PARTS END ==============  */}

                    <div className="expenses">
                        <div className="middle">
                            <div className="left">
                                <h3>Chiffre d'affaire Journalier</h3>
                                <h1>$14,024</h1>
                            </div>
                            <div className="progress">
                                <svg>
                                    <circle cx="38" cy="38" r="36"></circle>
                                </svg>
                                <div className="number">
                                    <p>62%</p>
                                </div>
                            </div>
                        </div>
                        <small className="text-muted">{date}</small>
                    </div>

                    <div className="income">
                        <div className="middle">
                            <div className="left">
                                <h3>Chiffre d'affaire mensuelle</h3>
                                <h1>$10,024</h1>
                            </div>
                            <div className="progress">
                                <svg>
                                    <circle cx="38" cy="38" r="36"></circle>
                                </svg>
                                <div className="number">
                                    <p>44%</p>
                                </div>
                            </div>
                        </div>
                        <small className="text-muted">Dernières 24 Heures</small>
                    </div>
                </div>

                <div className="recent-order">
                    <h2>Factures récentes</h2>
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
                    <Link to={'/orders'}>Tout voir</Link>
                </div>
            </main>
        </>
    )
}