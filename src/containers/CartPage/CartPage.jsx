import styles from "./CartPage.module.scss";
import ProductCard from "../../components/ProductCard";

const CartPage = ({ inCart }) => {
    return (
        <div className={styles.CartPage}>
            <h1>Cart</h1>
            <div className={styles.CartPage__Grid}>
                {inCart &&
                    inCart.map((product) => {
                        return (
                            <ProductCard key={product.id} product={product} />
                        );
                    })}
            </div>
        </div>
    );
};

export default CartPage;
