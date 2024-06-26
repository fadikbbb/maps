import React from 'react';

function Addproduct() {

    async function handleSubmit(event) {
        event.preventDefault();
        const title = event.target.title.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        const image = event.target.image.value;
const category=event.target.category.value;
        const formData = {
            title: title,
            description: description,
            price: parseFloat(price), // Ensure price is parsed as a number
            image: image,
            category:category
        };

        try {
            const response = await fetch('https://6672c0d76ca902ae11b1a226.mockapi.io/shamstore/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            console.log('Product added successfully:', formData);

            // Optionally, you can redirect or display a success message here
        } catch (error) {
            console.error('Error adding product:', error.message);
            // Handle errors as needed
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="title" id="floatingInput" required placeholder="title"/>
                    <label htmlFor="floatingInput">title</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="description" id="floatingInput" required placeholder="description"/>
                    <label htmlFor="floatingInput">description</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="number" className="form-control" name="price" id="floatingInput" required placeholder="price"/>
                    <label htmlFor="floatingInput">price</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="image" id="floatingInput" required placeholder="image"/>
                    <label htmlFor="floatingInput">image</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" name="category" id="floatingInput" required placeholder="category"/>
                    <label htmlFor="floatingInput">category</label>
                </div>
                <button type="submit" className="btn btn-primary m-auto">Submit</button>
            </form>
        </div>
    );
}

export default Addproduct;
