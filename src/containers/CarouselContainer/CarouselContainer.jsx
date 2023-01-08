import { useEffect } from "react";
import { useState } from "react";
import CarouselCard from "../../components/CarouselCard/CarouselCard";
import styles from "./CarouselContainer.module.scss";

const CarouselContainer = ({ products, isFeatured }) => {
    const [index, setIndex] = useState(0);

    const length = isFeatured.length;

    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? length - 1 : newIndex);
    };

    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex);
    };

    const displayCard = () => {
        for (let i = 0; i < length; ++i) {
            if (index === i) {
                return <CarouselCard product={isFeatured[i]} index={index} />;
            }
        }
    };

    return (
        <div className={styles.CarouselContainer}>
            <h1>Featured Products</h1>

            <div className={styles.CarouselContainer__Wrapper}>
                <button className={styles.btn} onClick={handlePrevious}>
                    &lt;
                </button>
                {displayCard()}
                <button className={styles.btn} onClick={handleNext}>
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default CarouselContainer;
