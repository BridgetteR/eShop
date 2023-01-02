import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./Heading.module.scss";
import Logo from "../../assets/Logo.svg";
import HeadingButtons from "../../components/HeadingButtons/HeadingButtons";

const Heading = () => {
    return (
        <div className={styles.Heading}>
            <img className={styles.Heading__logo} src={Logo} height="60px" />
            <SearchBar />
            <HeadingButtons />
        </div>
    );
};

export default Heading;
