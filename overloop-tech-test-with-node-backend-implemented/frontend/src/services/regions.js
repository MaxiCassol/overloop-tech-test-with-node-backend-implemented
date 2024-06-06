import api from '../utils/api';

export const listRegions = async () => {
    const response = await api.get('regions');
    return response.data;
};
