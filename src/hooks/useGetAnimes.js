import { useCallback, useState } from "react";
import { getAnimes } from "../api";

export function useGetAnimes() {
    const [information, setInformation] = useState([]);
    const [error, setError] = useState();

    const fetchAnime = useCallback(async ({ text }) => {
        try {
            const response = await getAnimes({ text });
            setInformation(response.data);
        } catch (error) {
            setError(error.message);
        }
    }, [])

    return {
        fetchAnime,
        animes: information,
        error
    }
}