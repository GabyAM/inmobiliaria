import { useEffect, useState } from 'react';

export function useFetchData(fetchFn) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        fetchFn()
            .then((results) => {
                setData(results);
                setError(null);
            })
            .catch((e) => {
                setError(e);
            })
            .finally(() => setIsLoading(false));
    }, [fetchFn]);

    return {
        data,
        isLoading,
        error
    };
}
