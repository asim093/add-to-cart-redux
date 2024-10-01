import React, { useEffect, useState } from 'react'

const Usefetch = (Url) => {
    const [Isdata, Setdata] = useState([]);
    const [Isloading, Setloading] = useState(false);

    const getdata = async () => {
        Setloading(true);
        try {
            const res = await fetch(Url);
            const Apidata = await res.json();
            Setdata(Apidata);
            Setloading(false);
        } catch (error) {
            Setloading(false)
            console.log(error)
        }
    }

    useEffect(() => {
        getdata();
    }, []);

    return ({Isdata , Isloading })
}

export default Usefetch