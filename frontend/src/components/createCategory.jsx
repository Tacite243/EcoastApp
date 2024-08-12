import axios from "axios";
import { useState } from "react";



export default function CreateCategory({ isOpen, isClose, addCategoryToState }) {
    const [categoryName, setCategoryName] = useState('');

    const handleAddCategory = async (e) => {
        e.preventDefault();
        const newCategory = {
            name: categoryName,
        };

        try {
            const response = await axios.post('https://capston-project-tacite243.onrender.com/api/categories/create', newCategory);
            console.log('Category added successfully:', response.data);
            setCategoryName('');
            addCategoryToState(response.data)
        } catch (error) {
            console.error('There was an error adding the category:', error);
        }
    };

    if (!isOpen) { return null; }

    return (
        <div className="popup-overlay">
            <div className="popup">
                <form onSubmit={handleAddCategory}>
                    <h2>Ajouter une catégorie</h2>
                    <input
                        type="text"
                        placeholder="Catégorie"
                        value={categoryName}
                        onChange={(e) => setCategoryName(e.target.value)}
                        required
                        className="form-field"
                    />
                    <button type="button" onClick={isClose}>Annuler</button>
                    <button type="submit">Ajouter la catégorie</button>
                </form>
            </div>
        </div>
    );
}
