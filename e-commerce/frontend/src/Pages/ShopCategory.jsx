<<<<<<< HEAD
import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img src={props.banner} alt="" />
=======
import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'



const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);


  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
>>>>>>> 9cd6acad1ab1ec3e6da6809de4e4ec1f28e93d45
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
<<<<<<< HEAD
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
=======
        {all_product.map((item,i)=>{
          if (props.category===item.category) {
            return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }
          else{
            return null;
          }

        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
>>>>>>> 9cd6acad1ab1ec3e6da6809de4e4ec1f28e93d45
    </div>
  );
};

<<<<<<< HEAD
export default ShopCategory;

// import React, { useContext } from 'react'
// import './CSS/ShopCategory.css'
// import { ShopContext } from '../Context/ShopContext'
// import dropdown_icon from '../Components/Assets/dropdown_icon.png'
// import Item from '../Components/Item/Item'

// const ShopCategory = (props) => {
//   const { all_product } = useContext(ShopContext);

//   return (
//     <div className='shop-category'>
//       <img src={props.banner} alt="" />
//       <div className="shopcategory-indexSort">
//         <p>
//           <span>Showing 1-12</span> out of 36 products
//         </p>
//         <div className="shop-category-sort">
//           Sort by <img src={dropdown_icon} alt="" />
//         </div>
//       </div>

//       <div className="shopcategory-products">
//         {all_product.map((item, i) => {
//           // Debugging log
//           // console.log("Comparing:", props.category, item.category);

//           // Ensure comparison is correct
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
// }

// export default ShopCategory;
=======
export default ShopCategory

>>>>>>> 9cd6acad1ab1ec3e6da6809de4e4ec1f28e93d45
