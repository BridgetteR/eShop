import { useEffect } from "react";
import { useState } from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = () => {
    const [hasSearched, setHasSearched] = useState(false);
    const [searchString, setSearchString] = useState("");

    const handleChange = (event) => {
        setSearchString(event.target.value);
        setHasSearched(true);
    };

    const handleSearch = async (event) => {
        event.preventDefault();
        // This needs to call upon the database to seach based on game names
    };

    const handleDelete = (event) => {
        event.preventDefault();
        setSearchString("");
        setHasSearched(false);
    };

    useEffect(() => {
        setHasSearched(false);
    }, []);

    return (
        <form className={styles.SearchBar} onSubmit={handleSearch}>
            <input
                onChange={handleChange}
                className={styles.SearchBar__textInput}
                type="text"
                autoComplete="off"
                placeholder="Search PC Games"
                value={searchString}
            />
            <div className={styles.SearchBar__btnBox}>
                <button
                    onClick={handleDelete}
                    // className={styles.SearchBar__btnClose}
                    className={
                        !hasSearched
                            ? styles.SearchBar__btnClose__False
                            : styles.SearchBar__btnClose
                    }
                />
                <input
                    type="submit"
                    className={styles.SearchBar__btnSearch}
                    value=""
                />
            </div>
        </form>
    );
};

export default SearchBar;
