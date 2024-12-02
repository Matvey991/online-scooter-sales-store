import { useEffect, useState } from "react";


export const LS_KEY_CATALOG = "catalog";

export const useCatalog = () => {
    const [catalog, setCatalog] = useState(true);
    
    useEffect(() => {
      const FromData = localStorage.getItem(LS_KEY_CATALOG);
      setCatalog(JSON.parse(FromData));
    }, []);
  
    useEffect(() => {
      localStorage.setItem(LS_KEY_CATALOG, JSON.stringify(catalog));
    }, [catalog]);
    
    function onCatalog() {
       setCatalog((prev) => !prev);
     }

     const onShowCatalog = () => {
        setCatalog((prev) => !prev)
        console.log('BTN SHOW')
     }

     
     return {
        onCatalog,
        catalog,
        setCatalog,
        onShowCatalog,
     }
};