import "./index.css"

const ProductCard=(props)=>{
   const {productDetails,selectedProduct}=props
   const {thumbnail,price,title,discountPercentage}=productDetails
   const markingPrice=Math.floor((price/(discountPercentage/100)));

   return(
    <div className="product-card">
        <img src={thumbnail} alt="thumbnail" className="thumbnail"/>
        
        <h1 className="product-name">{title}</h1>
        <div className="price-details">
            <div className="prices">
                <p className="price">{price}</p>
                <p className="markingPrice">{markingPrice}</p>
                <p className="discount">{`(${discountPercentage}%)`}</p>
            </div>
            <div className="card-button">
                <img src="https://res.cloudinary.com/ds6o1m3db/image/upload/v1713083957/shopping-bag_1_jwjym8.png" onClick={()=>{selectedProduct()}} alt="" className="shopping-bag"/>
            </div>
        </div>
    </div>
   
   )
}

export default ProductCard