import { useEffect, useState } from "react";


export const LS_KEY_CATALOG = "catalog";

export const useCatalog = () => {
    const [catalog, setCatalog] = useState<boolean>(true);
    
    useEffect(() => {
        const fromData = localStorage.getItem(LS_KEY_CATALOG);
        if (fromData !== null) {
            const parsedData = JSON.parse(fromData);
            if (typeof parsedData === 'boolean') {
                setCatalog(parsedData);
            } else {
                setCatalog(true);
            }
        }
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