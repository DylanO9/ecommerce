import React from 'react';
import { FiX, FiTrash2 } from 'react-icons/fi';

export default function CartDropdown({ items, onRemoveItem, onClose }) {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-50 animate-fadeIn">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Shopping Cart</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FiX size={20} />
          </button>
        </div>
        
        {items.length === 0 ? (
          <p className="text-gray-500 text-center py-4">Your cart is empty</p>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                <div className="flex-1">
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-sm text-gray-500">${item.price.toFixed(2)} x {item.quantity}</p>
                </div>
                <button 
                  onClick={() => onRemoveItem(item.id)}
                  className="text-gray-500 hover:text-red-500"
                >
                  <FiTrash2 size={18} />
                </button>
              </div>
            ))}
            
            <div className="border-t pt-4">
              <div className="flex justify-between font-semibold">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button className="w-full mt-4 bg-green text-white py-2 rounded hover:bg-opacity-90">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 