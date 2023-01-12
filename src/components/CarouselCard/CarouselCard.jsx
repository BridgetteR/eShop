import styles from "./CarouselCard.module.scss";
import HeartEmpty from "../../assets/heartEmpty.svg";
import Heart from "../../assets/heart.svg";
import { NavLink } from "react-router-dom";
import FavouriteButton from "../FavouriteButton/FavouriteButton";

const Carousel1 = ({ product }) => {
    return (
        <div className={styles.Carousel}>
            <NavLink
                to={`/product/${product.id}`}
                className={styles.Carousel__MainNav}
            >
                <img
                    src={product.image}
                    className={styles.Carousel__MainNav__Img}
                />
            </NavLink>
            <div className={styles.Carousel__Details}>
                <div className={styles.Carousel__Details__Top}>
                    <h4>{product.edition[1]} Edition</h4>
                    <FavouriteButton product={product} />
                </div>
                <div className={styles.Tag}>
                    {product.tags.map((tag, index) => {
                        return (
                            <p className={styles.Tag__Sin} key={index}>
                                {tag}
                            </p>
                        );
                    })}
                </div>
                <h2>{product.title}</h2>
                <p>${product.price + 20}</p>
            </div>
        </div>
    );
};

export default Carousel1;
