'use client'

import { useState, useEffect } from 'react';

export default function TestCatalogPage() {
    const [medicines, setMedicines] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMedicines = async () => {
            try {
                console.log('Testing API call...');
                const response = await fetch('http://localhost:5000/medicines?page=1&limit=5');
                const data = await response.json();
                console.log('API Response:', data);

                if (data.data) {
                    setMedicines(data.data);
                }
            } catch (error) {
                console.error('API Error:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchMedicines();
    }, []);

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Test Catalog</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <p>Found {medicines.length} medicines</p>
                    <ul>
                        {medicines.map((med: any) => (
                            <li key={med.id}>{med.name} - {med.price} FCFA</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}