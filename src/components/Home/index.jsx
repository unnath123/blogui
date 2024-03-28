import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [formData, setFormData] = useState(null); // State to store form data

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/auth/login");
                // Assuming the response data contains the form HTML
                setFormData(response.data);
            } catch (error) {
                console.error("Error fetching form data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {formData ? (
                // Render the form if formData is available
                <div dangerouslySetInnerHTML={{ __html: formData }} />
            ) : (
                // Render a loading message or spinner while waiting for the response
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Home;
