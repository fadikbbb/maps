import React, { useState, useEffect } from 'react';

function Customer() {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchCustomers() {
            try {
                const customerResponse = await fetch('https://666da7c37a3738f7caccf44a.mockapi.io/shamstore/user');
                if (!customerResponse.ok) {
                    throw new Error('Failed to fetch customers');
                }
                const customersData = await customerResponse.json();

                const messageResponse = await fetch('https://666da7c37a3738f7caccf44a.mockapi.io/shamstore/message');
                if (!messageResponse.ok) {
                    throw new Error('Failed to fetch messages');
                }
                const messagesData = await messageResponse.json();

                const customersWithMessages = customersData.map(customer => {
                    const customerMessage = messagesData.find(msg => msg.email === customer.email);
                    return { ...customer, message: customerMessage ? customerMessage.message : 'No message' };
                });

                setCustomers(customersWithMessages);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchCustomers();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error fetching data: {error.message}</p>;
    }

    return (
        <div>
            <h2>Customers</h2>
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th className='text-center align-middle mx-4'>Name</th>
                        <th className='text-center align-middle mx-4'>Email</th>
                        <th className='text-center align-middle mx-4'>first Message</th>
                        <th className='text-center align-middle mx-4'>type</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer) => (
                        <tr className='text-center align-middle' key={customer.id}>
                            <td className='text-center align-middle mx-4'>{customer.name}</td>
                            <td className='text-center align-middle mx-4'>{customer.email}</td>
                            <td className='text-center align-middle mx-4'>{customer.message}</td>
                            <td className='text-center align-middle mx-4'>{customer.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Customer;
