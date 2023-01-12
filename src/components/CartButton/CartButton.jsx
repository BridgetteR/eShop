import styles from "./CartButton.module.scss";
import { useEffect } from "react";
import { updateCart, updateStock } from "../../services/products";
import { useContext } from "react";
import { FavouriteContext } from "../../context/FavouriteContext";
import Cart from "../../assets/cart.svg";

const CartButton = ({ product }) => {
    const { updateToggle } = useContext(FavouriteContext);

    const handleClick = () => {
        if (product.quantity > 0) {
            updateCart(product.id, !product.inCart);
        }

        if (product.inCart === true) {
            updateStock(product.id, product.quantity++);
        } else {
            updateStock(product.id, product.quantity--);
        }

        updateToggle();
    };

    useEffect(() => {}, [handleClick]);

    return (
        <button onClick={handleClick} className={styles.CartButton}>
            <p>Add to Cart</p>

            <img className={styles.CartButton__Cart} src={Cart} width="15px" />
        </button>
    );
};

export default CartButton;
