import { useState, useEffect } from 'react';

const Usefetch = (url) => {
    const [Isdata, setIsdata] = useState([]);
    const [Isloading, setIsloading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsloading(true); 
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setIsdata(data);
            } catch (error) {
                console.error("Error fetching data:", error);
                setIsdata([]); 
            } finally {
                setIsloading(false); 
            }
        };

        fetchData(); 

        return () => {
            setIsdata([]); 
        };
    }, [url]); 

    return { Isdata, Isloading };
};

export default Usefetch;
