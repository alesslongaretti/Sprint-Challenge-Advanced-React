import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (initialValues = {}) => {
    const [values, setValues] = useLocalStorage('darkMode', initialValues);

    useEffect(() => {
        if(values) {
            document.body.classList.add('dark-mode')

        } else {
            document.body.classList.remove('dark-mode')
        }
    }, [values]);
    return [values, setValues]
};