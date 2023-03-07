import React from 'react';
import ProductCard from './productCard';

export default function ProductList() {
  let  productsArray = [
    {key:0,prod_id :  15454,  prod_name  : "Soap",  category:  "Bodycare", price : 40,stock:true},
    {key:1,prod_id :  15455,  prod_name  : "Shampoo",  category:  "Bodycare", price : 100,stock:false},
    {key:2,prod_id :  15456,  prod_name  : "Detergent",  category:  "Home", price : 150,stock:true},
    {key:3,prod_id :  15457,  prod_name  : "Dishwash",  category:  "Home", price : 30,stock:false},
    {key:4,prod_id :  15458,  prod_name  : "Floor Cleaner",  category: "Home", price : 40,stock:true},
    {key:5,prod_id :  15459,  prod_name  : "Chocolate",  category:  "Snacks", price : 30,stock:false},
    {key:6,prod_id :  15459,  prod_name  : "Biscuits",  category:  "Snacks", price : 20,stock:true}
];
var userCategory='';
const newArray=productsArray.filter(i=>i.category===userCategory);
if(userCategory===undefined || userCategory===''){
  return(
    <ProductCard data={productsArray}/>
  )

}else{
  return(
    <ProductCard data={newArray}/>
  )
}
  
}
