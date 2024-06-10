import React, { useEffect, useState } from 'react';
import Multiselect from 'react-widgets/lib/Multiselect';
import { listAuthors } from '../../services/authors';

function AuthorDropdown({ value, onChange }) {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        const fetchAuthors = async () => {
            const data = await listAuthors();
            setAuthors(data);
        };

        fetchAuthors();
    }, []);

    return (
        <div className="AuthorDropdown">
            <Multiselect
                value={ value }
                data={ authors }
                textField="name"
                valueField="id"
                onChange={ onChange }
                allowCreate={ false }
                placeholder="Select Author"
            />
            <button onClick={() => onChange(null)}>Clear Selection</button>
        </div>
    );
}

export default AuthorDropdown;
