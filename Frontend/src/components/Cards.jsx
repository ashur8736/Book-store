import React from 'react';
import { useAuth } from '../context/AuthProvider';

const Cards = ({ item }) => {
  const [authUser] = useAuth();

  const handleBuyNow = () => {
    if (authUser) {
      // Simulate adding to cart
      console.log(`Added to cart: ${item.title}`);
      alert(`${item.title} has been added to your cart.`);
    } else {
      // Show login modal
      const modal = document.getElementById('my_modal_3');
      if (modal && modal.showModal) {
        modal.showModal();
      }
    }
  };

  return (
    <div className="mt-4 my-3 p-3">
      <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200">
        <figure>
          <img src={item.image} alt="Book" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.title}
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">${item.price}</div>
            <div
              onClick={handleBuyNow}
              className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 duration-200"
            >
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;