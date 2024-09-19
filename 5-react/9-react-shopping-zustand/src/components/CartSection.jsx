// import React from "react";
// import products from "../data/products";
import Cart from "./Cart";
// import { Container } from "./Container";
import { Link } from "react-router-dom";
import useCartStore from "../store/useCartStore";
import useProductStore from "../store/useProductStore";
import emptyCartImg from "../assets/empty-cart.svg";
import { CreditCard } from 'lucide-react'

const CartSection = () => {
  const { carts } = useCartStore();
  const { products } = useProductStore();

  const total = carts.reduce((pv, cv) => {
    const price = products.find(({ id }) => id === cv.productId).price;
    const cost = cv.quantity * price;
    return pv + cost;
  }, 0);

  const tax = total * 0.05;

  const netTotal = total + tax;

  return (
    <>
      <div className=" flex flex-col gap-5 h-full">
        
        {carts.length === 0 ? (
          <img
            src={emptyCartImg}
            className=" w-[200px] block mx-auto mt-10"
            alt="empty"
          />
        ) : (
          carts.map((cart) => <Cart key={cart.id} cart={cart} />)
        )}

        <div className="  ">
          {/* <Container className="px-5"> */}
           
           
           <div className=" bg-gradient-to-br from-gray-50 to-gray-100 py-4 px-6" >
           <div className=" flex justify-between items-center mb-4">
                <p className=" text-gray-500">Total</p>
                <p className=" font-bold">{total.toFixed(2)}</p>
              </div>
              <div className=" flex justify-between items-center mb-4 ">
                <p className="text-lg font-medium text-gray-900">Tax(10%)</p>
               <p className=" font-bold">{tax.toFixed(2)}</p>
              </div>
           <div className=" flex justify-between items-center mb-4">
                <span className=" text-lg font-medium text-gray-900">Net Total</span>
                <p className=" text-xl font-bold text-blue-600">{netTotal.toFixed(2)}</p>
              </div>
           </div>
            
           <Link
          href="/checkout"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-150 ease-in-out flex items-center justify-center"
          aria-label="Proceed to Checkout"
        >
          <CreditCard className="w-5 h-5 mr-2" />
          Proceed to Checkout
        </Link>
          
              {/* <Link className=" border border-black px-4 py-2 ">Order Now</Link> */}
           
          {/* </Container> */}
        </div>
      </div>
    </>
  );
};

export default CartSection;
