import styles from "./App.module.scss";
import Heading from "./containers/Heading/Heading";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getAllProducts } from "./services/products";
import { useState } from "react";
import { useEffect } from "react";

function App() {
    const [products, setProducts] = useState([]);

    const [added, setAdded] = useState(0);

    useEffect(() => {
        const wrapper = async () => {
            const allProducts = await getAllProducts();
            setProducts(allProducts);
        };

        wrapper();
        console.log(products);
    }, [added]);

    return (
        <div className={styles.App}>
            <BrowserRouter>
                <Heading />
                <hr />

                <Routes>
                    <Route
                        path="/"
                        element={
                            <div>
                                <h1>Test</h1>
                            </div>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
