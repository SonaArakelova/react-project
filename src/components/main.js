

const Item = ({data:{id,title,thumbnail,price,quantity}}) => {

  const lowQuantity = quantity;
 return (
  <div className="card">
    <div className="image">
      <img alt =" " src ={thumbnail} />
    </div>
    <div className="card-content">
      <div className="content.header">
      {title}
      </div>
      <div className="price">
        <span>Price: {price}</span>
      </div>
      Quantity:
      <span
      style={{ 
        color: lowQuantity < 2 ? "red" : ""}}
        className = {lowQuantity < 2 ? "lowinstorage" : "description "}>
         {lowQuantity}
      </span>
    </div>
    <div className="extracontent">
     ID: {id}
    </div>

  </div>
 )
}

 export const Main = (props)=>{
  const {items} = props;
  console.log(props);
  
  return <div className="main"> 
  {items.map((item)=>{
    return<Item data = {item}  key = {item.id}/>

  })}
  </div>
};
