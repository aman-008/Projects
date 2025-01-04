import React from 'react'
import './DescriptionBox.css'


const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-Commerce website is an online platform that allows businesses to sell products or services directly to consumers. It typically includes a homepage showcasing promotions, product categories, and a search bar. Product pages feature detailed descriptions, images, prices, and customer reviews. Users can add items to a shopping cart, where shipping, taxes, and discounts are calculated. The checkout process is streamlined, offering guest checkout and multiple payment options..</p>

        <p>
            E-commerce websites typically display products or services along with detailed descriptions,images,prices and any available variations (e.g. sizes,colors). Each product usually has its own dedicated page with relevant information.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
