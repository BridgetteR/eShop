import { useState } from "react";
import CarouselCard from "../../components/CarouselCard/CarouselCard";
import styles from "./CarouselContainer.module.scss";

const CarouselContainer = ({ products, added, setAdded }) => {
    const [index, setIndex] = useState(0);
    const length = products.length;

    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? length - 1 : newIndex);
    };

    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex);
    };

    return (
        <div className={styles.CarouselContainer}>
            <h1>Featured Products</h1>

            <div className={styles.CarouselContainer__Wrapper}>
                <button onClick={handlePrevious}>Previous</button>
                <button onClick={handleNext}>Next</button>
                <p>{index}</p>
                {products.map((product) => {
                    return <CarouselCard key={product.id} product={product} />;
                })}
            </div>
        </div>
    );
};

export default CarouselContainer;
