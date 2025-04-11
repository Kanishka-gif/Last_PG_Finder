import React, { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (pg) => {
    setWishlist((prev) => {
      const alreadyExists = prev.some((item) => item.id === pg.id);
      if (alreadyExists) {
        return prev.filter((item) => item.id !== pg.id);
      } else {
        return [...prev, pg];
      }
    });
  };

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
