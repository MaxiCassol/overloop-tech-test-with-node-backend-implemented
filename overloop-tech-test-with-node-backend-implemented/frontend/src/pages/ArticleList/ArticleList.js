import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

import { ROUTE_ARTICLE_PREFIX, ROUTE_ARTICLE_CREATE } from '../../constants';
import { listArticles } from '../../services/articles';
import { getAuthor } from '../../services/authors';

function ArticleList() {
    const [articles, setArticles] = useState([]);
    const [authors, setAuthors] = useState({});

    useEffect(() => {
        const fetchArticles = async () => {
            const data = await listArticles();
            setArticles(data);

            // Fetch author details for each article
            const authorPromises = data.map(article =>
                article.authorId ? getAuthor(article.authorId) : Promise.resolve(null)
            );
            const authorData = await Promise.all(authorPromises);

            const authorsMap = {};
            authorData.forEach(author => {
                if (author) {
                    authorsMap[author.id] = author;
                }
            });
            setAuthors(authorsMap);
        };

        fetchArticles();
    }, []);

    const renderArticles = () => articles.map((article) => {
        const { id, title, authorId } = article;
        const author = authors[authorId];

        return (
            <tr key={id}>
                <td>
                    <Link to={`${ROUTE_ARTICLE_PREFIX}/${id}`}>{title}</Link>
                </td>
                <td>
                    {author ? `${author.firstName} ${author.lastName}` : 'No Author'}
                </td>
            </tr>
        );
    });

    return (
        <div className="ArticleList">
            <h1>Articles</h1>
            <Link className="d-block mb-3" to={ROUTE_ARTICLE_CREATE}>
                Create a new Article
            </Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                    </tr>
                </thead>
                <tbody>
                    {renderArticles()}
                </tbody>
            </Table>
        </div>
    );
}

export default ArticleList;
