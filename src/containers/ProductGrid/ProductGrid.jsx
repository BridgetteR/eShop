import ProductCard from "../../components/ProductCard";
import styles from "./ProductGrid.module.scss";

const ProductGrid = ({ products }) => {
    return (
        <div className={styles.ProductGrid}>
            {products &&
                products.map((product) => {
                    return <ProductCard key={product.id} product={product} />;
                })}
        </div>
    );
};

export default ProductGrid;
