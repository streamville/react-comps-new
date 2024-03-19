import { useState, useContext, useEffect } from "react"; 
import React from "react";


const NavigationContext = React.createContext();

function NavigationProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handler);
    return () => {
      window.removeEventListener('popstate', handler);
    };
  }
  , []);

  const navigate = (to) => {
    // navigate to a new page
    window.history.pushState({}, '', to);
    setCurrentPath(to);
  } 

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider};
export default NavigationContext;