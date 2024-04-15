import { useState,useEffect} from "react"
import Header from "../Header"
import ProductCard from "../ProductCard"
import Tab from "../Tab"
import "./index.css"
import axios from "axios";

const categoryList=[
  {id:"womens-bags",
  name:"Womens-Bags",
  isSelected:false
  },
  {id:"smartphones",
  name:"Smartphones",
  isSelected:false
  },
  {id:"laptops",
  name:"Laptops",
  isSelected:false
  },
  {id:"groceries",
  name:"Groceries",
  isSelected:false
  },
  {id:"furniture",
  name:"Furniture",
  isSelected:false
  }
  ]

const Products=()=>{
      const [categoryType,setCategoryType]=useState("womens-bags");
      const [productList,setProductList]=useState([]);
      const [productCount,setProductCount]=useState(0);

      useEffect(()=>{
        getAllProducts()
      },[categoryType])

     const setCategory=(id)=>{
        setCategoryType(id)
        console.log(categoryType)
      }

     const selectedProduct=()=>{
      setProductCount(prevState=>prevState+1)
     }

      const getAllProducts=async()=>{
        const response=await axios.get(`https://dummyjson.com/products/category/${categoryType}`);
        const data=response.data.products
        setProductList(data);
        console.log(data);
      }

      return(
        <div className="products">
            <Header  />
            <div className="navbar">
              {categoryList.map(each=>(
                <Tab categoriesDetails={each} key={each.id} setCategory={setCategory} isTrue={categoryType===each.id} />
              ))}
            </div>
            <div className="filtered-products">
              <p>All Products</p>
              {productList.map(each=>(
                <li className="filter-name" key={each.id}>{each.title}</li>
              ))}
            </div>
            <div className="first-row">
                 <h1>{categoryType}</h1>
                 <div className="product-count">
                    <p>{productCount}  Products</p>
                    <img src="https://res.cloudinary.com/ds6o1m3db/image/upload/v1713085708/Vector_4_ctwf0x.png"  alt="total" className="total"/>
                 </div>
              </div>
              <ul className="product-section">
                    {productList.map(product=>(
                          <ProductCard productDetails={product} selectedProduct={selectedProduct} key={product.id}/>
                    ))}
              </ul>
              
          
           
        </div>
      )
}

export default Products