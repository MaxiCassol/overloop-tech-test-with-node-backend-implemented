import api from '../utils/api';

export const listAuthors = async () => {
    const response = await api.get('authors');
    return response.data;
};

export const createAuthor = async (author) => {
    const response = await api.post('authors', author);
    return response.data;
};

export const editAuthor = async (authorId, author) => {
    const response = await api.put(`authors/${authorId}`, author);
    return response.data;
};

export const getAuthor = async (authorId) => {
    const response = await api.get(`authors/${authorId}`);
    return response.data;
};
