// import { createContext, useState } from "react";
// import axios from "axios";

// const ClickedProductContextDefaultValues = {};

// export const ClickedProductContext = createContext(
//   ClickedProductContextDefaultValues
// );

// const ClickedProductContextProvider = ({ children }) => {
//   const [clickedProduct, setClickedProduct] = useState(
//     ClickedProductContextDefaultValues
//   );

//   const clickedProductHandler = async (id) => {
//     try {
//       const response = await axios.get(
//         `http://localhost:8000/api/products/${id}`
//       );
//       const product = response.data;
//       setClickedProduct(product);
//       return;
//     } catch (error) {
//       return { msg: "Error when setting a product", error };
//     }
//   };

//   return (
//     <ClickedProductContext.Provider
//       value={{ clickedProduct, clickedProductHandler }}
//     >
//       {children}
//     </ClickedProductContext.Provider>
//   );
// };

// export default ClickedProductContextProvider;
