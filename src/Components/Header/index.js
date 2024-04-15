
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { CiBookmark } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
import "./index.css"



const Header=()=>{
   

  
    return(
       <div className="top-bar">
        <div><h1 className="title">TANN TRIM</h1></div>
        <div className="top-right">
            <li><CiSearch size={18}  fill={"white"} /></li>
            <li><img src="https://res.cloudinary.com/ds6o1m3db/image/upload/v1713109197/user-alt_1_pblwty.png" alt="profile" className="profile"/></li>
            <li><CiBookmark size={18} fill={"white"}/></li>
            <li><BsCart size={18} fill={"white"}/></li>
        </div>
       </div>
      
    )
}
export default Header