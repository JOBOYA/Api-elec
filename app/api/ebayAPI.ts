import axios from 'axios';

const options = {
  method: 'POST' as const,
  url: process.env.NEXT_PUBLIC_EBAY_API_URL!,
  headers: {
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_EBAY_API_KEY!,
    'X-RapidAPI-Host': 'ebay-average-selling-price.p.rapidapi.com',
  },
  data: {
    keywords: 'iPhone',
    excluded_keywords: 'locked cracked case box read LCD',
    max_search_results: '30',
    max_pages: '5',
    category_id: '9355',
    remove_outliers: 'true',
    site_id: '0',
    aspects: [
      {
        name: 'Model',
        value: 'Apple iPhone X',
      },
      {
        name: 'LH_ItemCondition',
        value: '3000',
      },
      {
        name: 'Network',
        value: 'Unlocked',
      },
      {
        name: 'Storage Capacity',
        value: '64 GB',
      },
    ],
  },
};

export const fetchData = async () => {
  try {
    const response = await axios.request(options);
   
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

