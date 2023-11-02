
'use client'
import React, { useState, useEffect } from 'react';
import { fetchData } from '../api/ebayAPI';
//react icon calendar 
import { FaCalendarAlt } from 'react-icons/fa';

interface Data {
  imageUrl: string;
  name: string;
  category_id: string;
  sale_price?: number;
  date_sold: string;
}

const Card = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    const fetchDataAndUpdateState = async () => {
      try {
        const response = await fetchData();
        const products = response?.products;
        if (products && Array.isArray(products) && products.length > 0) {
          const transformedData = products.map((product: any) => ({
            imageUrl: product.image_url || "",
            name: product.title || "",
            category_id: '1',
            sale_price: product.sale_price || 0,
            date_sold: product.date_sold || "",
          }));
          setData(transformedData);
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchDataAndUpdateState();
  }, []);

  const renderSkeleton = () => (
    <div className="w-64 border rounded-lg p-4 mx-2 my-4 m-4 shadow-lg animate-pulse">
      <div className="h-40 relative">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gray-300 rounded"></div>
        </div>
      </div>
      <div className="mt-4">
        <div className="h-4 bg-gray-300 rounded mb-1 w-1/3"></div>
        <div className="h-6 bg-gray-300 rounded mb-2 w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded mb-2 w-1/2"></div>
        <div className="h-4 bg-gray-300 rounded mb-3 w-2/3"></div>
        <div className="h-4 bg-gray-300 rounded w-full"></div>
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-40">

      {isLoading ? Array(30).fill(null).map((_, index) => (
        <React.Fragment key={index}>
          {renderSkeleton()}
        </React.Fragment>
      )) : data.slice(0, 30).map((item, index) => (
        <div key={index} className="w-64 border rounded-lg p-4 mx-2 my-4 m-4 shadow-lg">
          {/* ... (le reste du code de la carte reste inchangé) */}
          <div className="h-40 relative">
            <img src={item.imageUrl} alt="example" className="w-full h-full object-cover rounded" />
          </div>
          <div className="mt-4">
            
            <h1 className="text-lg font-bold">{item.name}</h1>
            <p className="text-lg text-gray-500 uppercase ">Prix: {item.sale_price}€</p>
            <p className="text-sm text-gray-500 flex items-center">
  <FaCalendarAlt className="mr-2"/>
  Date de vente : {item.date_sold}
</p>

           
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;