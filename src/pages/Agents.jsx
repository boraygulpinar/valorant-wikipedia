import React, { useEffect, useState } from 'react'
import { getAgents } from '../services/valorantAPI'
import '../css/agents.css'

function Agents() {

    const [agents, setAgents] = useState([]);

    useEffect(() => {
        const fetchAgents = async () => {
            const { data } = await getAgents();
            const playableAgents = data.filter((agent) => agent.isPlayableCharacter)
            setAgents(playableAgents);
            console.log(playableAgents)

        }
        fetchAgents();
    }, [])


    return (
        <div>
            <div className='card-container'>
                {agents.map((agent) => (
                    <div className='card' key={agent.uuid}>
                        <h2>{agent.displayName}</h2>
                        <p className='agent-description'>{agent.description}</p>
                        <img src={agent.displayIcon} alt={agent.displayName} width="100" />
                        <p className='agent-role'>{agent.role.displayName}</p>

                        <p className='ability-container'>
                            {agent.abilities.map((ability, index) => (
                                <span className='ability' key={index}>{ability.displayName}</span>
                            ))}
                        </p>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Agents