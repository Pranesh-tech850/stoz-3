import { createContext, useState, useContext, useEffect } from "react";
import api from "../services/api";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
};

export const AuthProvider = ({ children }) => {
  // Auth State
  const [user, setUser] = useState(null);

  // Cart State
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);

  // ---------------- AUTH ----------------

  const register = async (name, email, password) => {
    try {
      const { data } = await api.post("/auth/register", {
        name,
        email,
        password,
      });

      localStorage.setItem("token", data.token);
      setUser(data);

      return { success: true, data };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || "Registration failed",
      };
    }
  };

  const login = async (email, password) => {
    try {
      const { data } = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", data.token);
      setUser(data);

      return { success: true, data };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || "Login failed",
      };
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setCartItems([]);
  };

  // ---------------- CART ----------------

  const addToCart = (product) => {
  setCartItems((prev) => {
    const exists = prev.find(
      (item) => item._id === product._id
    );

    if (exists) {
      return prev.map((item) =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    return [...prev, { ...product, quantity: 1 }];
  });
};

const removeFromCart = (productId) => {
  setCartItems((prev) =>
    prev.filter((item) => item._id !== productId)
  );
};

const increaseQuantity = (productId) => {
  setCartItems((prev) =>
    prev.map((item) =>
      item._id === productId
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    )
  );
};

const decreaseQuantity = (productId) => {
  setCartItems((prev) =>
    prev.map((item) =>
      item._id === productId
        ? {
            ...item,
            quantity:
              item.quantity > 1
                ? item.quantity - 1
                : 1,
          }
        : item
    )
  );
};

  const value = {
    // Auth
    user,
    register,
    login,
    logout,

    // Cart
     cartItems,
     addToCart,
     removeFromCart,
     increaseQuantity,
     decreaseQuantity
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};