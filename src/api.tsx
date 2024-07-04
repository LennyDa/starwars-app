import axios from 'axios';

export const api = {
    fetchCategories: async () => {
        const BaseUrl = 'https://swapi.dev/api/';
        return await axios.get(BaseUrl)
            .then((response) => response.data)
            .catch((error) => console.log('Initial data could not load', error))
    }
}