import React from "react";
import useProductStore from "../store/useProductStore";
import useCartStore from "../store/useCartStore";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { Plus, Minus, ShoppingCart, CreditCard } from "lucide-react";

const Cart = ({ cart: { id, productId, quantity } }) => {
  const { products } = useProductStore();
  const { increaseQuantity, decreaseQuantity, removeCart } = useCartStore();

  const product = products.find((el) => el.id === productId);

  const cost = product.price * quantity;

  const handleIncreaseQuantity = () => {
    increaseQuantity(id);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      decreaseQuantity(id);
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          removeCart(id);
          toast.success("Item remove successfully");
        }
      });
    }
  };

  return (
    // <div className=" border border-black p-5 grid grid-cols-6">
  
     <ul className=" divide-y divide-gray-300">
     <li className="py-4 px-6 flex items-center hover:bg-gray-50 transition duration-150 ease-in-out">
        <img
          src={product.image}
          className="w-20 h-20 rounded-lg object-cover mr-4 shadow-md"
          alt=""
        />
        <div className="flex-grow">
          <h3 className="text-lg font-medium text-gray-900">{product.title}</h3>
          <p className="text-blue-600 font-semibold">Price ({product.price})</p>
          <div className="flex items-center mt-2" >
          <button
            onClick={handleDecreaseQuantity}
            className="text-gray-500 hover:text-blue-600 focus:outline-none transition duration-150 ease-in-out"
          >
            <Minus className="w-5 h-5" />
          </button>

          <span className="mx-2 text-gray-700 font-medium"> {quantity}
          </span>
          <button
            onClick={handleIncreaseQuantity}
            className=" text-gray-500 hover:text-blue-600 focus:outline-none transition duration-150 ease-in-out"
          >
            +
          </button>

         
   
          </div>
        </div>
        <p className=" text-lg font-semibold text-gray-900 ml-4">{cost.toFixed(2)}</p>
      </li>
     </ul>
    


      

  ); 
};

export default Cart;
