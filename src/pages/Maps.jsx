import React, { useEffect, useState } from 'react'
import { getMaps } from '../services/valorantAPI';
import '../css/maps.css'

function Maps() {

    const [maps, setMaps] = useState([]);

    useEffect(() => {
        const fetchMaps = async () => {
            const data = await getMaps();
            setMaps(data.data);
            console.log(data.data)
        }
        fetchMaps();
    }, [])

    return (
        <div>
            <div className='map-card-container'>
                {maps.map((map) => (
                    <div className='map-card'>
                        <h2>{map.displayName}</h2>
                        <img src={map.displayIcon} />
                        <img src={map.splash} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Maps