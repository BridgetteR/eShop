import styles from "./ProductPage.module.scss";
import { getProductById } from "../../services/products";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

const ProductPage = ({}) => {
    const { id } = useParams();
    const [productInfo, setProductInfo] = useState({});

    const [edition, setEdition] = useState("Standard");

    const handleChange = (event) => {
        setEdition(event.target.value);
    };

    useEffect(() => {
        const wrapper = async () => {
            const data = await getProductById(id);
            console.log(data);
            setProductInfo(data);
        };
        wrapper();
    }, []);

    return (
        <div className={styles.ProductPage}>
            <img src={productInfo.image} />
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
            </div>
        </div>
    );
};

export default ProductPage;
