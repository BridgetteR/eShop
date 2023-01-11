import styles from "./FavouriteButton.module.scss";
import HeartEmpty from "../../assets/heartEmpty.svg";
import Heart from "../../assets/heart.svg";
import { useEffect } from "react";
import { updateFavourite } from "../../services/products";
import { useContext } from "react";
import { FavouriteContext } from "../../context/FavouriteContext";

const FavouriteButton = ({ product }) => {
    const { updateToggle } = useContext(FavouriteContext);

    const handleClick = () => {
        updateFavourite(product.id, !product.favourited);
        updateToggle();
    };

    useEffect(() => {}, [handleClick]);

    return (
        <button onClick={handleClick} className={styles.FavouriteButton}>
            <p>Add to Favourites</p>
            {product.favourited === true ? (
                <img
                    className={styles.FavouriteButton__Heart}
                    src={Heart}
                    width="15px"
                />
            ) : (
                <img
                    className={styles.FavouriteButton__Heart}
                    src={HeartEmpty}
                    width="15px"
                />
            )}
        </button>
    );
};

export default FavouriteButton;
