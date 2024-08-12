import axios from "axios";
import { useState } from "react";



export default function CreateProduct({ isOpen, isClose, addProductToState }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [stock, setStock] = useState('');

    const handleAddProduct = async (e) => {
        e.preventDefault();
        const newProduct = {
            name: name,
            description: description,
            price: price,
            stock: stock,
            categoryName: category,
        };

        try {
            const response = await axios.post('https://capston-project-tacite243.onrender.com/api/products/create', newProduct);
            console.log('Product added successfully:', response.data);
            setName('');
            setDescription('');
            setPrice('');
            setCategory('');
            setStock('');
            isClose();
            addProductToState(response.data)
        } catch (error) {
            console.error('There was an error adding the product:', error);
        }
    };

    if (!isOpen) {return null}
    
    return (
        <div className="popup-overlay">
            <div className="popup">
                <form onSubmit={handleAddProduct}>
                    <h2>Ajouter un produit</h2>
                    <input
                        type="text"
                        name="Nom du produit"
                        placeholder="Nom du produit"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="form-field"
                    />
                    <input
                        type="text"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="form-field"
                    />
                    <input
                        type="text"
                        placeholder="Prix unitaire"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                        className="form-field"
                    />
                    <input
                        type="text"
                        placeholder="Prix unitaire"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                        required
                        className="form-field"
                    />
                    <input
                        type="text"
                        placeholder="Catégory"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                        className="form-field"
                    />
                    <button onClick={isClose}>Annuler</button>
                    <button type="submit">Ajouter le produit</button>
                </form>
            </div>
        </div>
    )
}