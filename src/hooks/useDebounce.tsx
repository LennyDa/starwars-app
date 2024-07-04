import {useEffect, useState} from 'react';

const useDebounce = (searchedValue, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(searchedValue)

    useEffect(() => {
        const delayRef = setTimeout(() => {
            setDebouncedValue(searchedValue);
        }, delay);

        return () => {
            clearTimeout(delayRef)
        }
    }, [searchedValue])

    return debouncedValue;
}

export default useDebounce;