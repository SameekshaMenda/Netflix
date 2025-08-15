import React, { Children, createContext, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {

    // initialize the state with the localstorage
    const [favorites, setFavorites] = useState(() => {
        try {
            const savedFav = localStorage.getItem("favorites");
            return savedFav ? JSON.parse(savedFav) : [];
        }
        catch {
            return [];
        }
    });
    // keeps local storage in sync
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));

    }, [favorites]);
    
    // functions to manage favorites
    const add = (movie) => {
        setFavorites(prev => {
            if (prev.find(m => m.id === movie.id))
                return prev;
            return [...prev, movie];
        })
    }

    const remove = (id) => {
        setFavorites( prev => prev.filter(m => m.id !== id));
    }

    const isFav = id => favorites.some(m => m.id === id);

    return (
        <FavoritesContext.Provider value={{ favorites, add, remove, isFav }}>
            {children}
        </FavoritesContext.Provider>
    )
}