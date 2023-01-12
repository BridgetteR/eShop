import styles from "./HeadingButtons.module.scss";
import Heart from "../../assets/heart.svg";
import Cart from "../../assets/cart.svg";
import { NavLink } from "react-router-dom";

const HeadingButtons = () => {
    return (
        <div className={styles.HeadingButtons}>
            <NavLink to="/favourites" className={styles.HeadingButtons__Heart}>
                <img src={Heart} width="20px" />
            </NavLink>

            <NavLink to="/cart" className={styles.HeadingButtons__Cart}>
                <img src={Cart} width="20px" />
            </NavLink>
        </div>
    );
};

export default HeadingButtons;
