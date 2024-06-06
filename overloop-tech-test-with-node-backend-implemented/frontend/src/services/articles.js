import api from '../utils/api';

export const listArticles = async () => {
    const response = await api.get('articles');
    return response.data;
};

export const getArticle = async (articleId) => {
    const response = await api.get(`articles/${articleId}`);
    return response.data;
};

export const createArticle = async (payload) => {
    const response = await api.post('articles', payload);
    return response.data;
};

export const editArticle = async (articleId, payload) => {
    const response = await api.put(`articles/${articleId}`, payload);
    return response.data;
};
