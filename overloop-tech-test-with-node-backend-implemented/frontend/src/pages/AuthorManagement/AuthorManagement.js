import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

import { listAuthors, createAuthor, editAuthor, getAuthor } from '../../services/authors';

function AuthorManagement() {
    const [authors, setAuthors] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [editingAuthorId, setEditingAuthorId] = useState(null);

    useEffect(() => {
        const fetchAuthors = async () => {
            const data = await listAuthors();
            setAuthors(data);
        };

        fetchAuthors();
    }, []);

    const handleSave = async () => {
        if (editingAuthorId) {
            await editAuthor(editingAuthorId, { firstName, lastName });
        } else {
            await createAuthor({ firstName, lastName });
        }

        setFirstName('');
        setLastName('');
        setEditingAuthorId(null);
        const updatedAuthors = await listAuthors();
        setAuthors(updatedAuthors);
    };

    const handleEdit = async (authorId) => {
        const author = await getAuthor(authorId);
        setFirstName(author.firstName);
        setLastName(author.lastName);
        setEditingAuthorId(authorId);
    };

    return (
        <div className="AuthorManagement">
            <h1>Manage Authors</h1>
            <Form>
                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" onClick={handleSave}>
                    {editingAuthorId ? 'Update Author' : 'Add Author'}
                </Button>
            </Form>
            <Table striped bordered hover className="mt-4">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map((author) => (
                        <tr key={author.id}>
                            <td>{author.firstName}</td>
                            <td>{author.lastName}</td>
                            <td>
                                <Button
                                    variant="warning"
                                    onClick={() => handleEdit(author.id)}
                                >
                                    Edit
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default AuthorManagement;
