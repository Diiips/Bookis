import './dropdown.css';
import React, { useEffect, useState } from "react";

export default function Dropdown({ Title, Data, setValue}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(Data.map(item => ({ label: item, value: item })));
    }, [Data]);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className='dropdown-component'>
            <select onChange={handleChange}>
                <option value="">{Title}</option>
                {data.map(({ label, value }) => (
                    <option key={value} value={value}>
                        {label}
                    </option>
                ))}
            </select>
        </div>
    );
}
