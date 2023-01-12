import styles from "./ProductCard.module.scss";
import { NavLink } from "react-router-dom";

const ProductCard = ({ product }) => {
    return (
        <NavLink to={`/product/${product.id}`} className={styles.ProductCard}>
            <img src={product.image} />
            <div className={styles.ProductCard__Banner}>
                <h4 className={styles.ProductCard__Banner__Content}>
                    {product.title}
                </h4>
                <p className={styles.ProductCard__Banner__Content}>
                    ${product.price}
                </p>
            </div>
        </NavLink>
    );
};

export default ProductCard;
