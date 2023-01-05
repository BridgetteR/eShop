import styles from "./App.module.scss";
import Heading from "./containers/Heading/Heading";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getAllProducts } from "./services/products";
import { useState } from "react";
import { useEffect } from "react";
import CarouselContainer from "./containers/CarouselContainer/CarouselContainer";
import ProductGrid from "./containers/ProductGrid/ProductGrid";
import ProductPage from "./containers/ProductPage/ProductPage";

function App() {
    const [products, setProducts] = useState([]);

    const [added, setAdded] = useState(false);

    useEffect(() => {
        const wrapper = async () => {
            const allProducts = await getAllProducts();
            setProducts(allProducts);
        };

        wrapper();
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
                                {/* <CarouselContainer
                                    products={products}
                                    added={added}
                                    setAdded={setAdded}
                                /> */}
                                <ProductGrid products={products} />
                            </div>
                        }
                    />
                    <Route
                        path="/product/:id"
                        element={
                            <div>
                                <ProductPage />
                            </div>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
