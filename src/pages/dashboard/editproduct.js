import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditProduct() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
        image: '',
        category: ''
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchProduct() {
            try {
                const response = await fetch(`https://6672c0d76ca902ae11b1a226.mockapi.io/shamstore/products/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const product = await response.json();
                setFormData({
                    title: product.title,
                    description: product.description,
                    price: product.price,
                    image: product.image,
                    category: product.category
                });
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        }

        fetchProduct();
    }, [id]);

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const response = await fetch(`https://6672c0d76ca902ae11b1a226.mockapi.io/shamstore/products/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            console.log('Product updated successfully:', formData);
            navigate('/dashboard');
        } catch (error) {
            console.error('Error updating product:', error.message);
            setError(error.message);
        }
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="title" id="titleInput" placeholder="Title" value={formData.title} onChange={handleChange} />
                    <label htmlFor="titleInput">Title</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="description" id="descriptionInput" placeholder="Description" value={formData.description} onChange={handleChange} />
                    <label htmlFor="descriptionInput">Description</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="number" className="form-control" name="price" id="priceInput" placeholder="Price" value={formData.price} onChange={handleChange} />
                    <label htmlFor="priceInput">Price</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="image" id="imageInput" placeholder="Image URL" value={formData.image} onChange={handleChange} />
                    <label htmlFor="imageInput">Image</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="category" id="categoryInput" placeholder="Category" value={formData.category} onChange={handleChange} />
                    <label htmlFor="categoryInput">Category</label>
                </div>
                <button type="submit" className="btn btn-primary m-auto">Submit</button>
            </form>
        </div>
    );
}

export default EditProduct;
