import { useState, useEffect } from 'react'
import axios from 'axios'


export const useRequestData = (url) => {
    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(false)
    const [erro, setErro] = useState(undefined)

    useEffect(() => {
        setIsLoading(true);
        axios.get(url)
            .then((response) => {
                setIsLoading(false);
                setData(response.data);
            }).catch(error => {
                setIsLoading(false);
                setErro(error);
            })

    }, [url])

    return [data, isLoading, erro];
}

