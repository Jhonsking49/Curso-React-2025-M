import { createContext, useState } from "react";

const ReviewsContext = createContext();

export const ReviewsProvider = ({ children }) => {
    const [reviews, setReviews] = useState([]);

    return (
        <ReviewsContext.Provider value={{ reviews, setReviews }}>
            {children}
        </ReviewsContext.Provider>
    );
}