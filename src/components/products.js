import { Link } from "react-router-dom";

function Products({ right, left, data, firstProduct }) {

    return (
        <div className="products">
            <h1 className="title" id="products">Products</h1>
            <div className="flex justify-center items-center md:flex-row flex-col-reverse my-6">
                <div className="my-6">
                    <h2 className="text-3xl font-bold mb-4">{firstProduct.title}</h2>
                    <p className="text-xs text-gray-400">{firstProduct.description}</p>
                    <p className="text-2xl my-4">${firstProduct.price}</p>
                    <Link className="btn-lightgreen" to={`/products/${firstProduct.id}`}>View Details</Link>
                </div>
                <img src={firstProduct.image} width={400} alt={firstProduct.title} />
            </div>
            <div className="flex items-center">
                <svg className="arrow" onClick={() => left("products-list")} xmlns="http://www.w3.org/2000/svg" style={{ transform: "rotate(180deg)" }} width={50} height={300} viewBox="0 0 25 25">
                    <path fill="currentColor" d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right" />
                </svg>
                <div className="products-list scrollbar-none overflow-x-auto flex w-full">
                    {data.map((product) => (
                        <div className="product border-x-2 p-4 border-cyan-500 min-w-[400px] mx-4 my-8 flex flex-col justify-between items-center" key={product.id}>
                            <div>
                                <img src={product.image} className="m-[auto] min-h-[150px] max-h-[150px]" alt={product.title} />
                            </div>
                            <h2 className="max-h-[40px] text-cyan-500 text-2xl my-4 text-ellipsis text-clip overflow-hidden">{product.title}</h2>
                            <p className="max-h-[100px] text-center text-xs text-gray-500 text-ellipsis text-clip overflow-hidden">{product.description}</p>
                            <p className="text-2xl my-4">${product.price}</p>
                            <Link className="btn-lightgreen" to={`/products/${product.id}`}>View Details</Link>
                        </div>
                    ))}
                </div>
                <svg className="arrow" onClick={() => right("products-list")} xmlns="http://www.w3.org/2000/svg" width={50} height={300} viewBox="0 0 25 25">
                    <path fill="currentColor" d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right" />
                </svg>
            </div>
        </div>
    );
}

export default Products;
