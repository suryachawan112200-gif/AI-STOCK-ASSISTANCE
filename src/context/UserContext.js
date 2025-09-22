import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

const API_BASE_URL = "https://your-backend-url.com/api";

export function UserProvider({ children }) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [hasPremium, setPremium] = useState(false);
  const [freeUploads, setFreeUploads] = useState(0);

  // Login call to backend
  async function login(email, password) {
    try {
      const res = await fetch($, { API_BASE_URL } / login, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) throw new Error("Login failed");
      const data = await res.json();

      setLoggedIn(true);
      setPremium(data.hasPremium);
      setFreeUploads(data.freeUploads || 0);
      return true;
    } catch (error) {
      alert("Login error: " + error.message);
      return false;
    }
  }

  // Logout logic (enhance for backend as needed)
  const logout = async () => {
    setLoggedIn(false);
    setPremium(false);
    setFreeUploads(0);
  };

  const useFreeUpload = () => setFreeUploads(freeUploads + 1);
  const upgradePremium = () => setPremium(true);

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
        hasPremium,
        upgradePremium,
        freeUploads,
        useFreeUpload,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}