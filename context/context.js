"use client"
import { createContext, useState } from "react";
export const Message_data = createContext(null);
function Context({ children }) {
    const [message, setMessage] = useState({msg: 123});
  
    return (
      <Message_data.Provider value={{ message, setMessage }}>
        {children}
      </Message_data.Provider>
    );
  }