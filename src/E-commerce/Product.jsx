
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from "./ReactRedux/CardSlice/Cardslice";
import { Link } from 'react-router-dom';


const Product = () => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();


    const addToCartHandler = (product) => {
        dispatch(addToCart(product));
        const alert = document.querySelector('.alert');
        alert.classList.add('show');
        setTimeout(() => {
            alert.classList.remove('show');
        }, 2000);
    };

 
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) {
                    throw Error('Failed to fetch data');
                }
                const data = await response.json();
                setProducts(data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className="w-full h-auto bg-slate-700">
            <section className="text-gray-600 body-font max-w-[1280px] h-auto mx-auto ">
                <h1 className='text-center text-4xl text-white pt-4 font-serif font-bold'>Trending Now</h1>

                <p className='text-center pt-4 text-white'>
                    Discover the Latest Trends in Fashion with us.
                </p>
                <div className="container px-5 py-8 mx-auto">
                    <div className="flex flex-wrap m-2 md:-m-4">
                        {products.map((item, id) => (
                            <div
                                key={id}
                                className="lg:w-1/4 md:w-1/2 sm:w-full p-2 md:p-4 w-full  bg-slate-300  border-[1px] border-black "

                            >
                                <Link to={`/product/${item.id}`} className="block relative h-48 rounded overflow-hidden  p-2 ">
                                    <img alt="ecommerce"
                                     style={{  maxHeight: '100%', maxWidth: '100%', filter: 'brightness(100%)' }} className="mix-blend-multiply  object-contain w-full h-full block" src={item.image} />
                                </Link>
                                <div className="mt-4 text-center">
                                    <h3 className="text-black font-bold mb-1">{item.category}</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">${item.price}</h2>
                                </div>
                                <div className="text-center pt-2 text-black font-bold">
                                    <button className="bg-slate-600 border  outline-none text-white px-2 py-1" onClick={() => addToCartHandler(item)}>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="alert">
                    Item added to cart!
                </div>
            </section>
        </div>
    );
};

export default Product;
