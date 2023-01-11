import { useState, createContext } from "react";
import { updateFavourite } from "../services/products";

export const FavouriteContext = createContext();

const UpdateProvider = ({ children }) => {
    const [updated, setUpdated] = useState(0);

    const updateToggle = () => {
        setUpdated(updated + 1);
    };

    const data = { updated, setUpdated, updateToggle };

    return (
        <FavouriteContext.Provider value={data}>
            {children}
        </FavouriteContext.Provider>
    );
};

export default UpdateProvider;
