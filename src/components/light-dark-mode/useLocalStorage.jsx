import { useEffect } from "react";
import { useState } from "react"




const useLocalStorage = (key, defaultValue) => {

    // to get local storage
    const [value, setValue] = useState(() => {
        let currentValue;

        try {
            currentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue));
        } catch (error) {
            console.log(error);
            currentValue = defaultValue;
        }

        return currentValue;
    });


    // to update local storage
    useEffect(() => {

        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

  return [value, setValue];
}
export default useLocalStorage