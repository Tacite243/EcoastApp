import React, { useState, useRef } from 'react';
import '../print.css';
import axios from 'axios';

export default function Selling({ date }) {
    const [invoiceData, setInvoiceData] = useState({
        clientName: '',
        items: [],
        total: 0,
    });
    const [newItem, setNewItem] = useState({ description: '', quantity: 0, price: 0 });
    const [isInvoiceCreated, setIsInvoiceCreated] = useState(false);
    const [invoiceValidete, setInvoicceValidate] = useState(false);
    const invoiceRef = useRef(null);

    const handleAddItem = () => {
        setInvoiceData((prevState) => {
            const updatedItems = [...prevState.items, newItem];
            const updatedTotal = updatedItems.reduce((total, item) => total + (item.quantity * item.price), 0);
            return { ...prevState, items: updatedItems, total: updatedTotal };
        });
        setNewItem({ description: '', quantity: 0, price: 0 });
    };

    const handleSubmitInvoice = async () => {
        try {
            const response = await axios.post('https://capston-project-tacite243.onrender.com/api/invoices/create', {
                orderId: "someOrderId", // A remplir en fonction de votre logique
                clientId: "someClientId", // A remplir en fonction de votre logique
                userId: "someUserId", // A remplir en fonction de votre logique
                amount: invoiceData.total,
                dueDate: "2024-12-31", // Date limite
                status: 'Unpaid', // Exemple de statut
                products: invoiceData.items.map(item => ({
                    id: item.id, // L'ID du produit
                    quantity: item.quantity,
                    price: item.price,
                })),
            });
    
            console.log('Facture créée avec succès : ', response.data);
            setIsInvoiceCreated(false);
        } catch (error) {
            console.error(error);
            alert('Erreur lors de la création de la facture.');
        }
    };

    const handlePrint = () => {
        const printContent = invoiceRef.current;
        const printWindow = window.open('', '', 'width=900,height=650');

        if (printWindow) {
            printWindow.document.open();
            printWindow.document.write(`
                <html>
                <head>
                    <title>Facture</title>
                    <link rel="stylesheet" type="text/css" href="print.css" />
                    <style>
                        body { font-family: Arial, sans-serif; }
                        .invoice-container { padding: 20px; }
                        .invoice-header { text-align: center; }
                        table { width: 100%; border-collapse: collapse; }
                        th, td { border: 1px solid black; padding: 8px; text-align: left; }
                        th { background-color: #f2f2f2; }
                    </style>
                </head>
                <body>
                    <div class="invoice-container">
                        ${printContent.innerHTML}
                    </div>
                </body>
                </html>
            `);
            printWindow.document.close();

            setTimeout(() => {
                printWindow.print();
                printWindow.close();
            }, 500);
        } else {
            alert('Impossible d\'ouvrir la fenêtre d\'impression. Veuillez vérifier vos paramètres de navigateur.');
        }
    };

    return (
        <main>
            <h1>Pannier</h1>
            <div className="date">
                <input type="date" value={date} readOnly />
            </div>
            <div className="selling">
                <div className="content">
                    <div className="nav-menu">
                        <button className="add-btn">Créer une commande</button>
                        <button className="add-btn" onClick={() => setIsInvoiceCreated(true)}>Créer une facture</button>
                    </div>
                    {isInvoiceCreated && (
                        <div className="invoice-creation">
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                handleAddItem();
                            }}>
                                <h2>Créer une Facture</h2>
                                <input
                                    type="text"
                                    value={invoiceData.clientName}
                                    placeholder='Nom du client :'
                                    onChange={(e) => setInvoiceData({ ...invoiceData, clientName: e.target.value })}
                                    className='form-field'
                                />
                                <input
                                    type="text"
                                    value={newItem.description}
                                    onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                                    className='form-field'
                                    placeholder='Article'
                                />
                                <input
                                    type="number"
                                    value={newItem.quantity}
                                    onChange={(e) => setNewItem({ ...newItem, quantity: parseInt(e.target.value) })}
                                    className='form-field'
                                    placeholder='Quantité'
                                />
                                <input
                                    type="number"
                                    value={newItem.price}
                                    onChange={(e) => setNewItem({ ...newItem, price: parseFloat(e.target.value) })}
                                    className='form-field'
                                    placeholder='Prix'
                                />
                                <button type='submit'>Ajouter l'article</button>
                            </form>
                            <div className="invoice-preview" ref={invoiceRef}>
                                <h2>Facture</h2>
                                <p>Nom du client : {invoiceData.clientName}</p>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Description</th>
                                            <th>Quantité</th>
                                            <th>Prix</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {invoiceData.items.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.description}</td>
                                                <td>{item.quantity}</td>
                                                <td>{item.price}</td>
                                                <td>{item.quantity * item.price}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <h3>Total : {invoiceData.total}</h3>
                                {invoiceValidete ?
                                    <button onClick={handlePrint} className='printButton'>Imprimer la facture</button> :
                                    <button className='printButton' onClick={handleSubmitInvoice}>Valider</button>
                                }
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};