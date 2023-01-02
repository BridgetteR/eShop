import styles from "./HeadingButtons.module.scss";
import Heart from "../../assets/heart.svg";
import Cart from "../../assets/cart.svg";

const HeadingButtons = () => {
    return (
        <div className={styles.HeadingButtons}>
            <span className={styles.HeadingButtons__Heart}>
                <img src={Heart} width="20px" />
            </span>

            <span className={styles.HeadingButtons__Cart}>
                <img src={Cart} width="20px" />
            </span>
        </div>
    );
};

export default HeadingButtons;
