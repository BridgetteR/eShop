import ProductCard from "../../components/ProductCard";
import styles from "./FavouritePage.module.scss";

const FavouritePage = ({ isFavourite }) => {
    return (
        <div className={styles.FavouritePage}>
            <h1>Favourites</h1>
            <div className={styles.FavouritePage__Grid}>
                {isFavourite &&
                    isFavourite.map((product) => {
                        return (
                            <ProductCard key={product.id} product={product} />
                        );
                    })}
            </div>
        </div>
    );
};

export default FavouritePage;
