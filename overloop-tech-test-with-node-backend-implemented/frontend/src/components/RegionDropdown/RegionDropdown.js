import React, { useState, useEffect } from 'react';
import Multiselect from 'react-widgets/lib/Multiselect'

import { listRegions } from '../../services/regions';

function RegionDropdown({ value, onChange }) {
    const [regions, setRegions] = useState([]);

    useEffect(() => {
        const fetchRegions = async () => {
            const data = await listRegions();
            setRegions(data);
        };

        fetchRegions();
    }, []);

    return (
        <div className="RegionDropdown">
            <Multiselect
                value={ value }
                data={ regions }
                textField="name"
                valueField="id"
                onChange={ onChange }
                allowCreate={ false }
            />
        </div>
    );
}

export default RegionDropdown;
