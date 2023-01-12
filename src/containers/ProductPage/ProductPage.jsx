import styles from "./ProductPage.module.scss";
import { getProductById } from "../../services/products";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import FavouriteButton from "../../components/FavouriteButton/FavouriteButton";
import { useContext } from "react";
import { FavouriteContext } from "../../context/FavouriteContext";
import CartButton from "../../components/CartButton/CartButton";

const ProductPage = ({}) => {
    const { id } = useParams();
    const [productInfo, setProductInfo] = useState({});
    const [edition, setEdition] = useState("Standard");
    const { updated } = useContext(FavouriteContext);

    const handleChange = (event) => {
        setEdition(event.target.value);
    };

    useEffect(() => {
        const wrapper = async () => {
            const data = await getProductById(id);
            setProductInfo(data);
        };
        wrapper();
    }, [updated]);

    return (
        <div className={styles.ProductPage}>
            <img className={styles.ProductPage__Img} src={productInfo.image} />
            <div className={styles.ProductPage__Right}>
                <h1>{productInfo.title}</h1>
                <p>
                    $
                    {edition === "Standard"
                        ? productInfo.price
                        : productInfo.price + 20}
                </p>
                <select value={edition} onChange={handleChange}>
                    <option value="Standard">Standard</option>
                    <option value="Deluxe">Deluxe</option>
                </select>
                <div className={styles.ProductPage__Right__Buttons}>
                    <FavouriteButton product={productInfo} />
                    <CartButton product={productInfo} />
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
