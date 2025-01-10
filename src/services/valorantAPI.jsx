import axios from 'axios'

const BASE_URL = "https://valorant-api.com/v1"

export const getAgents = async () => {
    const response = await axios.get(`${BASE_URL}/agents`)
    return response.data
}

export const getMaps = async () => {
    const response = await axios.get(`${BASE_URL}/maps`)
    return response.data
}

export const getWeapons = async () => {
    const response = await axios.get(`${BASE_URL}/weapons`)
    return response.data
}

