import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./Heading.module.scss";
import Logo from "../../assets/Tenzen.png";
import HeadingButtons from "../../components/HeadingButtons/HeadingButtons";
import { NavLink } from "react-router-dom";

const Heading = () => {
    return (
        <div className={styles.Heading}>
            <NavLink to="/">
                <img
                    className={styles.Heading__logo}
                    src={Logo}
                    height="60px"
                />
            </NavLink>
            <SearchBar />
            <HeadingButtons />
        </div>
    );
};

export default Heading;
