
'use client'
import React, { useState, useEffect } from 'react';
import { fetchData } from '../api/fakeData';
//react icon calendar 
import { FaCalendarAlt } from 'react-icons/fa';
import Arrow from './Arrow';
import Loader from './Loader';


interface Data {
  imageUrl: string;
  name: string;
  category_id: string;
  sale_price?: number;
  date_sold: string;
}

const Card = () => {
  const [isLoading, setIsLoading] = useState(true); // Chargement initial
  const [isDataLoading, setIsDataLoading] = useState(true); // Chargement des données
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    const fetchDataAndUpdateState = async () => {
      setIsLoading(true); // Assurez-vous que le loader est activé
      setIsDataLoading(true); // Active le chargement des données
  
      try {
        // Simuler un délai avec setTimeout
        setTimeout(async () => {
          const response = await fetchData();
          const products = response?.products;
          if (products && Array.isArray(products) && products.length > 0) {
            const transformedData = products.map((product) => ({
              imageUrl: product.image_url || "",
              name: product.title || "",
              category_id: product.category_id || '1',
              sale_price: product.sale_price || 0,
              date_sold: product.date_sold || "",
            }));
            setData(transformedData);
            setIsDataLoading(false); // On désactive le chargement des données après le délai
          }
        }, 3000); // Attendez 3000ms (3 secondes) avant de charger les données
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false); // Le chargement initial est désactivé après le délai
      }
    };
  
    fetchDataAndUpdateState();
  }, []);
  
  const renderSkeleton = () => (
    <div className="w-64 border rounded-lg p-4 my-6 mx-3 shadow-lg max-w-xs animate-pulse">
      <div className="h-40 bg-gray-300 rounded"></div> {/* Image placeholder */}
      <div className="mt-4">
        <div className="h-4 bg-gray-300 rounded mb-1 w-1/3"></div> {/* Title placeholder */}
        <div className="h-6 bg-gray-300 rounded mb-2 w-3/4"></div> {/* Price placeholder */}
        <div className="flex items-center mb-2">
          <FaCalendarAlt className="mr-2 text-gray-300" /> {/* Icon placeholder */}
          <div className="h-4 bg-gray-300 rounded w-3/4"></div> {/* Date placeholder */}
        </div>
        <div className="h-4 bg-gray-300 rounded w-full"></div> {/* Additional info placeholder */}
      </div>
    </div>
  );
  
  

  return (
    <>
     {isLoading ? (
      <Loader />
    ) : (
      <div className="flex flex-wrap justify-center gap-3 mt-40">
      {isDataLoading ? (
        // Afficher les squelettes pendant le chargement des données.
        Array(30).fill(null).map((_, index) => (
          <React.Fragment key={index}>
            {renderSkeleton()}
          </React.Fragment>
        ))
      ) : (
        // Afficher les cartes avec les données chargées.
        data.map((item, index) => (
          <div key={index} className="w-64 border rounded-lg p-4 my-6 mx-3 shadow-lg max-w-xs">
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
        ))
      )}
    </div>
    )}
    <Arrow />
    </>
  );
}


        

export default Card;