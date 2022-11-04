// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const useGetProducts = (API) => {
//   const [products, setProducts] = useState([]);

//   // useEffect(async () => {
//   // 	const response = await axios(API);
//   // 	setProducts(response.data);
//   // }, []);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await axios.get(API);
//       setProducts(response.data);
//     }
//     fetchData();
//   }, [API]);

//   return products;
// };

// export default useGetProducts;
import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await axios(API);
      const filteredProducts = response.data.filter((product) => {
        return product.images.length > 0;
      });
      setProducts(filteredProducts);
    }
    fetchData();
  }, []);

  return products;
};

export default useGetProducts;
