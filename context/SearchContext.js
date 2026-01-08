"use client";
import { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
    const [searchFilters, setSearchFilters] = useState({});

    const updateSearchFilters = (filters) => {
        setSearchFilters(filters);
        if (typeof window !== "undefined") {
            localStorage.setItem("searchFilters", JSON.stringify(filters));
        }
        toast.success("Search filters updated!");
    };

    const clearSearchFilters = () => {
        setSearchFilters({});
        if (typeof window !== "undefined") {
            localStorage.removeItem("searchFilters");
        }
    };

    return (
        <SearchContext.Provider value={{ searchFilters, updateSearchFilters, clearSearchFilters }}>
            {children}
        </SearchContext.Provider>
    );
};
