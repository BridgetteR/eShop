import styles from "./App.module.scss";
import Heading from "./containers/Heading/Heading";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getAllProducts } from "./services/products";
import { useState } from "react";
import { useEffect, useContext } from "react";
import CarouselContainer from "./containers/CarouselContainer/CarouselContainer";
import ProductGrid from "./containers/ProductGrid/ProductGrid";
import ProductPage from "./containers/ProductPage/ProductPage";
import FavouritePage from "./containers/FavouritePage/FavouritePage";
import { FavouriteContext } from "./context/FavouriteContext";
import CartPage from "./containers/CartPage/CartPage";

function App() {
    const [products, setProducts] = useState([]);
    const [isFeatured, setIsFeatured] = useState([]);
    const [isFavourite, setIsFavourite] = useState([]);
    const [inCart, setInCart] = useState([]);

    const { updated } = useContext(FavouriteContext);

    useEffect(() => {
        const wrapper = async () => {
            const allProducts = await getAllProducts();
            setProducts(allProducts);
            const data = allProducts;
            const featuredData = [];
            const favouriteData = [];
            const cartData = [];
            for (let i = 0; i < data.length; ++i) {
                if (data[i].featured == true) {
                    featuredData.push(data[i]);
                }
                if (data[i].favourited == true) {
                    favouriteData.push(data[i]);
                }
                if (data[i].inCart == true) {
                    cartData.push(data[i]);
                }
            }
            setIsFeatured(featuredData);
            setIsFavourite(favouriteData);
            setInCart(cartData);
        };
        wrapper();
    }, [updated]);

    return (
        // <UpdateProvider>
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
                    <Route path="/product/:id" element={<ProductPage />} />
                    <Route
                        path="/favourites"
                        element={<FavouritePage isFavourite={isFavourite} />}
                    />
                    <Route
                        path="/cart"
                        element={<CartPage inCart={inCart} />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
        // </UpdateProvider>
    );
}

export default App;
