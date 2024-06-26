import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbars from "../components/navbar";
import Footer from "../components/footer";
function Products() {
   const [products, setProducts] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
       async function fetchData() {
           try {
               const response = await fetch('https://6672c0d76ca902ae11b1a226.mockapi.io/shamstore/products');
               if (!response.ok) {
                   throw new Error('Failed to fetch products');
               }
               const data = await response.json();
               setProducts(data);
           } catch (error) {
               setError(error);
           } finally {
               setLoading(false);
           }
       }
       fetchData();
   }, []);

   if (loading) {
       return <p>Loading...</p>; // Add a loading indicator
   }

   if (error) {
       return <p>Error fetching products: {error.message}</p>; // Display error message
   }

  return (
        <div>
            <Navbars />
            <h1>products</h1>
            <div>
                {products.map((product) => (
                    <div className="product" style={{width:"200px",display:"flex",flexDirection:"column",textAlign:"center"}} key={product.id}>
                        <img src={product.image} width={200} alt={product.title} />
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                        <Link to={`/products/${product.id}`}>View Details</Link>
                    </div>
                ))}
            </div>
      <Footer/>
        </div>
    );
}
export default Products