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
    const [isFeatured, setIsFeatured] = useState([]);

    useEffect(() => {
        const wrapper = async () => {
            const allProducts = await getAllProducts();
            setProducts(allProducts);
            const data = allProducts;
            const shortData = [];
            for (let i = 0; i < data.length; ++i) {
                if (data[i].featured == true) {
                    shortData.push(data[i]);
                }
            }
            setIsFeatured(shortData);
            console.log(shortData);
        };

        wrapper();
    }, []);

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
                                <CarouselContainer
                                    products={products}
                                    isFeatured={isFeatured}
                                />
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
