
'use client'
import React, { useState, useEffect } from 'react';

const Card = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simule un chargement de 2 secondes
  }, []);

  return (
    <div className="w-64 border rounded-lg p-4 mx-auto mt-10">
      <div className="h-40 relative">
        {isLoading ? (
          <div className="animate-pulse absolute inset-0">
            <div className="w-full h-full bg-gray-300 rounded"></div>
          </div>
        ) : (
          <img src="https://images.unsplash.com/photo-1698774628594-5769aa6c2b6e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8" alt="example" className="w-full h-full object-cover rounded" />
        )}
      </div>
      <div className="mt-4">
        {isLoading ? (
          <div className="animate-pulse">
            <div className="h-4 bg-gray-300 rounded mb-1 w-1/3"></div>
            <div className="h-6 bg-gray-300 rounded mb-2 w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded mb-2 w-1/2"></div>
            <div className="h-4 bg-gray-300 rounded mb-3 w-2/3"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
          </div>
        ) : (
          <>
            <p className="text-sm text-gray-500 uppercase">CATEGORY</p>
            <h1 className="text-lg font-bold">The Catalyzer</h1>
            <p className="text-sm mt-2">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.
            </p>
            <div className="mt-3 flex justify-between items-center">
              <a href="#" className="text-blue-500 hover:underline text-sm">
                Learn More →
              </a>
              <div className="flex space-x-2 text-gray-500">
                <span>👁 1.2K</span>
                <span>💬 6</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
