import { useEffect, useState } from "react";
import CreateProduct from "../components/createProduct";
import CreateCategory from "../components/createCategory";
import axios from "axios";



export default function ProductManagement({ date, setDate }) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isPopup, setPopup] = useState(false);
    const [categories, setCategories] = useState([]);
    const [products, setProduct] = useState([]);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const handleClick = () => {
        openPopup()
    };

    const openPop = () => {
        setPopup(true);
    };

    const closePop = () => {
        setPopup(false);
    };

    const handleCreateCategory = () => {
        openPop(true)
    };

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('https://capston-project-tacite243.onrender.com/api/categories');
                setCategories(response.data);
            } catch (error) {
                console.error('There was an error fetching the categories:', error);
            }
        };

        fetchCategories();
    }, []);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://capston-project-tacite243.onrender.com/api/products');
                setProduct(response.data);
            } catch (error) {
                console.error('There was an error fecthing the products:', error);
            };
        }

        fetchProducts();
    }, []);

    const addCategoryToState = (newCategory) => {
        setCategories((prevCategories) => [...prevCategories, newCategory]);
    };

    const addProductToState = (newProduct) => {
        setProduct((prevProducts) => [...prevProducts, newProduct]);
    }

    return (
        <main>
            <h1>Gestion de stock</h1>
            <div className="date">
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>

            <div className="client-table">
                <button className="add-btn" onClick={handleClick}>Ajouter un nouveau produit</button>

                <CreateCategory isOpen={isPopup} isClose={closePop} addCategoryToState={addCategoryToState} />
                <CreateProduct isOpen={isPopupOpen} isClose={closePopup} addProductToState={addProductToState} />
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Désignation</th>
                            <th>Stock disponible</th>
                            <th>Stock minimum</th>
                            <th>Prix</th>
                            <th>Catégorie</th>
                            <th>description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={`product-${product.id}-${products.length}`}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.stock}</td>
                                <td>{product.minimumStock}</td>
                                <td>{product.price}</td>
                                <td>{product.stock}</td>
                                <td>{product.categoryName}</td>
                            </tr>
                        ))}
                    </tbody>
                </table><br /><br />
                <h2>Catégories</h2>
                <button className="add-btn" onClick={handleCreateCategory}>Ajouter une catégorie</button>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nom</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map(category => (
                            <tr key={category.id}>
                                <td>{category.id}</td>
                                <td>{category.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    )
}