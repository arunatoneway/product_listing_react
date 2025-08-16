import { useState } from "react";

function productlist() { 
    const [list, setList] =useState([
        {title: "Smart Phone",
         category: "Electronics",
         ratting: "4",
         price: "10000" 
        },
        {title: "Fan",
         category: "Appliances",
         ratting: "4",
         price: "10000" 
        },
        {title: "Shirt",
         category: "Fashion",
         ratting: "4",
         price: "10000" 
        },
        {title: "Headset",
         category: "Electronics",
         ratting: "4",
         price: "10000" 
        }
    ])

    return{

    }
    
}
export default productlist