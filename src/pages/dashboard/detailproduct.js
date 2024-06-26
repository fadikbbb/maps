import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
function DetailProduct() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://6672c0d76ca902ae11b1a226.mockapi.io/shamstore/products')
            .then(res => res.json())
            .then(json => setData(json))

    }, [])
    return <div><h2>Section title</h2>
        <Link to={"/dashboard/addproduct"} className='btn btn-success my-3 d-block'>addproduct</Link>
        <div className="table-responsive small">
            <table className="table table-striped table-sm">
                <thead>
                    <tr className='text-center'>
                        <th scope="col">id</th>
                        <th scope="col">title</th>
                        <th scope="col">price</th>
                        <th scope="col">description</th>
                        <th scope="col">category</th>
                        <th scope="col">RUD</th>
                    </tr>
                </thead>
                <tbody>{
                    data.map(({ id, title, price, description, category }) => <tr className='text-center align-middle'>
                        <td>{id}</td>
                        <td>{title}</td>
                        <td>${price}</td>
                        <td>{description}</td>
                        <td>{category}</td>
                        <td className=' d-flex flex-lg-row flex-column justify-content-center'>
                            <td ><Link to={`/products/${id}`} className=' d-flex justify-content-center btn btn-primary m-1'>view</Link></td>
                            <td ><Link to={`/dashboard/editproduct/${id}`} className=' d-flex justify-content-center btn btn-success m-1'>update</Link></td>
                            <td ><Link to={`/dashboard/deleteproduct/${id}`} className=' d-flex justify-content-center btn btn-danger m-1'>delete</Link></td>
                        </td>
                    </tr>
                    )
                    }
                </tbody>
            </table>
        </div></div>;
}

export default DetailProduct;