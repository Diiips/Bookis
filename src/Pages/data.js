import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>Fetched Data:</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default DataFetcher;
