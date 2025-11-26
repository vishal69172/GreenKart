import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 flex flex-col">
      {product.dietary && (
        <span className="text-xs text-green-600 font-medium mb-2">dietary badge</span>
      )}
      <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
        {product.name}
      </h3>
      <div className="text-xs text-gray-500 mb-2">{product.unit}</div>
      <div className="mt-auto">
        <div className="flex items-baseline space-x-2 mb-2">
          <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
          {product.pricePerUnit && (
            <span className="text-xs text-gray-500">at {product.pricePerUnit}</span>
          )}
        </div>
        <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-red-600 transition font-medium text-sm">
          ADD+
        </button>
      </div>
    </div>
  );
};

export default ProductCard;



