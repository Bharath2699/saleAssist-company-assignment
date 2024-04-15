import "./index.css"

const Tab=(props)=>{
    const {categoriesDetails,setCategory,isTrue}=props
    const {name,id}=categoriesDetails
    const style=isTrue?"selected":"not-selected"
    return(
        <li className={style}  onClick={()=>{setCategory(id)}}  >{name}</li>
    )
}
export default Tab