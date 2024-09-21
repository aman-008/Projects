// import React, { useContext } from "react";
// import "./CSS/ShopCategory.css";
// import { ShopContext } from "../Context/ShopContext";
// import dropdown_icon from "../Components/Assets/dropdown_icon.png";
// import Item from "../Components/Item/Item";
// const ShopCategory = (props) => {
//   const { all_product } = useContext(ShopContext);
//   return (
//     <div className="shop-category">
//       <img src={props.banner} alt="" />
//       <div className="shopcategory-indexSort">
//         <p>
//           <span>Showing 1-12</span> out of 36 products
//         </p>
//         <div className="shopcategory-sort">
//           Sort by <img src={dropdown_icon} alt="" />
//         </div>
//       </div>
//       <div className="shopcategory-products">
//         {all_product.map((item, i) => {
//           if (props.category === item.category) {
//             return (
//               <Item
//                 key={i}
//                 id={item.id}
//                 name={item.name}
//                 image={item.image}
//                 new_price={item.new_price}
//                 old_price={item.old_price}
//               />
//             );
//           } else {
//             return null;
//           }
//         })}
//       </div>
//     </div>
//   );
// };

// export default ShopCategory;

import React, { useContext, useMemo } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  // Memoizing the filtered products based on the selected category
  const filteredProducts = useMemo(() => 
    all_product.filter(item => item.category === props.category), 
    [all_product, props.category]
  );

  return (
    <div className='shop-category'>
      {/* Banner Image with a fallback */}
      <img src={props.banner || 'default-banner.jpg'} alt="Category Banner" />
      
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of {filteredProducts.length} products
        </p>
        <div className="shop-category-sort">
          Sort by <img src={dropdown_icon} alt="Sort Dropdown Icon" />
        </div>
      </div>

      <div className="shopcategory-products">
        {/* Mapping through the filtered products */}
        {filteredProducts.map(item => (
          <Item
            key={item.id}  // Using item.id as the unique key
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopCategory;
