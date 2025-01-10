import React, { useEffect, useState } from 'react'
import '../css/weapons.css'
import { getWeapons } from '../services/valorantAPI'

function Weapons() {

    const [weapons, setWeapons] = useState([])

    useEffect(() => {
        const fetchWeapons = async () => {
            const data = await getWeapons();
            setWeapons(data.data)
            console.log(data.data)
        }
        fetchWeapons();
    }, [])

    return (
        <div>
            <div className='weapon-card-container'>
                {weapons.map((weapon) => (
                    <div className='weapon-card' key={weapon.uuid}>
                        <h2>{weapon.displayName}</h2>
                        <img src={weapon.displayIcon} alt="" />
                        <p className='weapon-category'>{weapon.shopData ? weapon.shopData.category : 'N/A'}</p>
                        <p className='weapon-cost'>Cost: {weapon.shopData ? weapon.shopData.cost : 'N/A'}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Weapons