import React from "react";
import { Container } from "../components/Container";
import BreadCrumb from "../components/BreadCrumb";
import CartSection from "../components/CartSection";
import { Plus, Minus, ShoppingCart, CreditCard } from "lucide-react";


const MyCart = () => {
  return (
    <Container className= " ">
      <div className="max-w-2xl mx-auto bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg rounded-lg overflow-hidden">

      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4 px-6 flex items-center">
        <ShoppingCart className="w-6 h-6 mr-2" />
        <h2 className="text-xl font-semibold">Your Cart</h2>
      </div>

      <BreadCrumb currentPageTitle="My Cart" />
      <CartSection />
      </div>
    </Container>
  );
};

export default MyCart;
